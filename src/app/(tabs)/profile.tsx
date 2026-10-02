// @ts-nocheck
import { Box, VStack, Heading, Text, HStack, Pressable } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/store/auth';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    router.replace('/login');
  };

  return (
    <Box flex={1} bg="$white" pt={insets.top} px="$4">
      <VStack space="md" pt="$4">
        <Heading size="xl" color="$primary900">
          Profile
        </Heading>

        <Box bg="$primary50" p="$4" borderRadius="$lg" space="sm">
          <HStack justifyContent="space-between">
            <Text size="xs" color="$textSecondary">Name</Text>
            <Text size="sm" fontWeight="$semibold" color="$primary900">
              {user?.full_name || `${user?.first_name || ''} ${user?.last_name || ''}`.trim() || 'N/A'}
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text size="xs" color="$textSecondary">Username</Text>
            <Text size="sm" color="$primary900">{user?.username || 'N/A'}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text size="xs" color="$textSecondary">Role</Text>
            <Text size="sm" color="$primary900">{user?.role?.name || 'N/A'}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text size="xs" color="$textSecondary">Department</Text>
            <Text size="sm" color="$primary900">
              {user?.one_charging?.department_name || 'N/A'}
            </Text>
          </HStack>
        </Box>

        <Pressable
          bg="$red500"
          p="$4"
          borderRadius="$lg"
          onPress={handleLogout}
          mt="$4"
        >
          <Text color="$white" fontWeight="$semibold" textAlign="center">
            Sign Out
          </Text>
        </Pressable>
      </VStack>
    </Box>
  );
}

