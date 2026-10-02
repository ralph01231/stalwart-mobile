// @ts-nocheck
import { Box, VStack, Heading, Text } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function RequestsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1} bg="$white" pt={insets.top} px="$4">
      <VStack space="md" pt="$4">
        <Heading size="xl" color="$primary900">
          My Requests
        </Heading>
        <Text size="sm" color="$textSecondary">
          Your submitted requests will appear here.
        </Text>
      </VStack>
    </Box>
  );
}

