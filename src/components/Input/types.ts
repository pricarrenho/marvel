export type InputProps = {
  name: string;
  value: string;
  isLoading: boolean;
  onChange: (value: string) => void;
  onClear: (value: string) => void;
};
