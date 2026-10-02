import 'react';
import type { ReactNode } from 'react';

declare module 'react' {
  interface RefAttributes {
    children?: ReactNode;
  }
  interface DOMAttributes {
    children?: ReactNode;
  }
}

declare module '@gluestack-ui/themed' {
  interface BoxProps {
    children?: ReactNode;
  }
  interface TextProps {
    children?: ReactNode;
  }
  interface HeadingProps {
    children?: ReactNode;
  }
  interface VStackProps {
    children?: ReactNode;
  }
  interface HStackProps {
    children?: ReactNode;
  }
  interface ButtonProps {
    children?: ReactNode;
  }
  interface InputProps {
    children?: ReactNode;
  }
  interface InputFieldProps {
    children?: ReactNode;
  }
  interface PressableProps {
    children?: ReactNode;
  }
  interface FormControlProps {
    children?: ReactNode;
  }
  interface FormControlLabelProps {
    children?: ReactNode;
  }
  interface FormControlErrorProps {
    children?: ReactNode;
  }
  interface ScrollViewProps {
    children?: ReactNode;
  }
  interface FlatListProps {
    children?: ReactNode;
  }
  interface SectionListProps {
    children?: ReactNode;
  }
  interface CenterProps {
    children?: ReactNode;
  }
  interface DividerProps {
    children?: ReactNode;
  }
  interface ImageProps {
    children?: ReactNode;
  }
  interface AvatarProps {
    children?: ReactNode;
  }
  interface BadgeProps {
    children?: ReactNode;
  }
  interface CardProps {
    children?: ReactNode;
  }
  interface CheckboxProps {
    children?: ReactNode;
  }
  interface RadioProps {
    children?: ReactNode;
  }
  interface SwitchProps {
    children?: ReactNode;
  }
  interface SelectProps {
    children?: ReactNode;
  }
  interface SliderProps {
    children?: ReactNode;
  }
  interface ProgressProps {
    children?: ReactNode;
  }
  interface SpinnerProps {
    children?: ReactNode;
  }
  interface LinkProps {
    children?: ReactNode;
  }
  interface FabProps {
    children?: ReactNode;
  }
  interface IconProps {
    children?: ReactNode;
  }
  interface AlertProps {
    children?: ReactNode;
  }
  interface AlertDialogProps {
    children?: ReactNode;
  }
  interface ModalProps {
    children?: ReactNode;
  }
  interface PopoverProps {
    children?: ReactNode;
  }
  interface TooltipProps {
    children?: ReactNode;
  }
  interface ToastProps {
    children?: ReactNode;
  }
  interface AccordionProps {
    children?: ReactNode;
  }
  interface ActionsheetProps {
    children?: ReactNode;
  }
  interface MenuProps {
    children?: ReactNode;
  }
  interface TabsProps {
    children?: ReactNode;
  }
  interface TextareaProps {
    children?: ReactNode;
  }
  interface KeyboardAvoidingViewProps {
    children?: ReactNode;
  }
  interface SafeAreaViewProps {
    children?: ReactNode;
  }
  interface StatusBarProps {
    children?: ReactNode;
  }
  interface VirtualizedListProps {
    children?: ReactNode;
  }
  interface RefreshControlProps {
    children?: ReactNode;
  }
  interface ImageBackgroundProps {
    children?: ReactNode;
  }
  interface LinearGradientProps {
    children?: ReactNode;
  }
  interface ViewProps {
    children?: ReactNode;
  }
}
