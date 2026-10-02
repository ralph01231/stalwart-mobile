// @ts-nocheck
import { Box, VStack, Heading, Text, HStack } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuthStore } from '@/store/auth';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const user = useAuthStore((s) => s.user);

  return (
    <Box flex={1} bg="$white" pt={insets.top} px="$4">
      <VStack space="md" pt="$4">
        <Heading size="xl" color="$primary900">
          Welcome, {user?.first_name || user?.username || 'User'}
        </Heading>
        <Text size="sm" color="$textSecondary">
          Stalwart Mobile Portal
        </Text>

        <HStack space="md" mt="$4">
          <Box flex={1} bg="$primary50" p="$4" borderRadius="$lg">
            <Text size="xs" color="$textSecondary">Role</Text>
            <Text size="sm" fontWeight="$semibold" color="$primary900">
              {user?.role?.name || 'N/A'}
            </Text>
          </Box>
          <Box flex={1} bg="$primary50" p="$4" borderRadius="$lg">
            <Text size="xs" color="$textSecondary">Department</Text>
            <Text size="sm" fontWeight="$semibold" color="$primary900">
              {user?.one_charging?.department_name || 'N/A'}
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
}

