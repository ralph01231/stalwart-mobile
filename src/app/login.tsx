import { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  Button,
  Input,
  FormControl,
  Pressable,
  Icon,
} from '@/components/ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuthStore } from '@/store/auth';

export default function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { login, isLoading, error, clearError } = useAuthStore();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ username?: string; password?: string }>({});

  const handleLogin = async () => {
    setFieldErrors({});
    clearError();

    const errors: typeof fieldErrors = {};
    if (!username.trim()) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    try {
      await login({ username: username.trim(), password });
      router.replace('/(tabs)');
    } catch (err: unknown) {
      const apiError = err as {
        errors?: { detail?: string; source?: { pointer?: string } }[];
      };
      if (apiError.errors && apiError.errors.length > 0) {
        const first = apiError.errors[0];
        const field = first.source?.pointer?.replace('/', '') as 'username' | 'password' | undefined;
        if (field === 'username' || field === 'password') {
          setFieldErrors({ [field]: first.detail || 'Invalid credentials' });
        }
      }
    }
  };

  return (
    <View
      flex={1}
      className="bg-primary px-6"
      style={{ paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 }}
    >
      <View flex={1} justifyContent="center" className="gap-8">
        <View className="gap-1 items-center">
          <Text className="text-white text-2xl font-bold">Stalwart</Text>
          <Text className="text-primary-100 text-sm">Mobile Portal</Text>
        </View>

        <View className="bg-card rounded-2xl p-6 shadow-lg gap-6">
          <View className="gap-1">
            <Text className="text-foreground text-lg font-semibold">Welcome back</Text>
            <Text className="text-muted-foreground text-sm">Enter your credentials to continue</Text>
          </View>

          {error && !fieldErrors.username && !fieldErrors.password && (
            <View className="bg-destructive/10 p-3 rounded-md">
              <Text className="text-destructive text-sm">{error}</Text>
            </View>
          )}

          <FormControl isInvalid={!!fieldErrors.username}>
            <FormControl.Label>
              <FormControl.LabelText className="text-foreground text-sm">Username</FormControl.LabelText>
            </FormControl.Label>
            <Input variant="outline" size="md">
              <Input.Field
                placeholder="e.g., namendoza"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Input>
            <FormControl.Error>
              <FormControl.ErrorText className="text-xs">{fieldErrors.username}</FormControl.ErrorText>
            </FormControl.Error>
          </FormControl>

          <FormControl isInvalid={!!fieldErrors.password}>
            <FormControl.Label>
              <FormControl.LabelText className="text-foreground text-sm">Password</FormControl.LabelText>
            </FormControl.Label>
            <Input variant="outline" size="md">
              <Input.Field
                placeholder="Enter password"
                value={password}
                onChangeText={setPassword}
                type={showPassword ? 'text' : 'password'}
                secureTextEntry={!showPassword}
              />
            </Input>
            <Pressable
              className="absolute right-3 top-3"
              onPress={() => setShowPassword(!showPassword)}
            >
              <Icon size="sm" className="text-muted-foreground" />
            </Pressable>
            <FormControl.Error>
              <FormControl.ErrorText className="text-xs">{fieldErrors.password}</FormControl.ErrorText>
            </FormControl.Error>
          </FormControl>

          <Button
            size="md"
            className="bg-primary"
            onPress={handleLogin}
            disabled={isLoading}
            opacity={isLoading ? 0.6 : 1}
          >
            <Button.Text className="text-primary-foreground font-semibold">
              {isLoading ? 'Signing in...' : 'SIGN IN'}
            </Button.Text>
          </Button>
        </View>

        <Text className="text-primary-100 text-xs text-center">
          Having trouble? Contact system support.
        </Text>
      </View>
    </View>
  );
}
