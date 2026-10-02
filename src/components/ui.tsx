// @ts-nocheck
import { createButton, createInput, createFormControl, createIcon, createPressable } from '@gluestack-ui/core';
import { View, Text, TextInput, Pressable, ActivityIndicator } from 'uniwind';

export const Button = createButton({
  Root: Pressable,
  Text: Text,
  Spinner: ActivityIndicator,
  Icon: View,
});

export const Input = createInput({
  Root: View,
  Input: TextInput,
  Icon: View,
  Slot: Pressable,
});

export const FormControl = createFormControl({
  Root: View,
  Error: View,
  ErrorText: Text,
  ErrorIcon: View,
  Label: View,
  LabelText: Text,
  LabelAstrick: Text,
  Helper: View,
  HelperText: Text,
});

export const Icon = createIcon({
  Root: View,
});

export const Pressable = createPressable({
  Root: Pressable,
});

export { View, Text, TextInput };
