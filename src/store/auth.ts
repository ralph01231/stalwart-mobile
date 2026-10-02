import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import { apiClient } from '@/lib/api';
import type { User, LoginCredentials, AuthResponse } from '@/types/auth';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  loadStoredAuth: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (credentials: LoginCredentials) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.post<AuthResponse>('/login', credentials);
      const { data: user, token } = response;

      await SecureStore.setItemAsync('auth_token', token);
      await SecureStore.setItemAsync('auth_user', JSON.stringify(user));
      apiClient.setToken(token);

      set({ user, token, isAuthenticated: true, isLoading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed';
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await apiClient.post('/logout');
    } catch {
      // Ignore logout API errors
    } finally {
      await SecureStore.deleteItemAsync('auth_token');
      await SecureStore.deleteItemAsync('auth_user');
      apiClient.setToken(null);
      set({ user: null, token: null, isAuthenticated: false, error: null });
    }
  },

  loadStoredAuth: async () => {
    try {
      const [token, userJson] = await Promise.all([
        SecureStore.getItemAsync('auth_token'),
        SecureStore.getItemAsync('auth_user'),
      ]);

      if (token && userJson) {
        const user = JSON.parse(userJson) as User;
        apiClient.setToken(token);
        set({ user, token, isAuthenticated: true });
      }
    } catch {
      // Clear corrupted storage
      await SecureStore.deleteItemAsync('auth_token');
      await SecureStore.deleteItemAsync('auth_user');
    }
  },

  clearError: () => set({ error: null }),
}));
