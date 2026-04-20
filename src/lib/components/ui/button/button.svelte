<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  type Variant = 'default' | 'ghost' | 'outline' | 'secondary';
  type Size = 'default' | 'sm' | 'xs' | 'lg' | 'icon';

  let {
    class: className = '',
    variant = 'default' as Variant,
    size = 'default' as Size,
    type = 'button' as 'button' | 'submit' | 'reset',
    disabled = false,
    onclick,
    style,
    children,
  }: {
    class?: string;
    variant?: Variant;
    size?: Size;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    style?: string;
    children?: Snippet;
  } = $props();

  const variants: Record<Variant, string> = {
    default: 'bg-foreground text-background shadow hover:bg-foreground/90',
    secondary: 'bg-muted text-foreground shadow-sm hover:bg-muted/80',
    outline: 'border border-border bg-transparent shadow-sm hover:bg-muted hover:text-foreground',
    ghost: 'hover:bg-muted hover:text-foreground',
  };

  const sizes: Record<Size, string> = {
    default: 'h-9 px-4 py-2 text-sm',
    sm: 'h-8 px-3 text-sm',
    xs: 'h-7 px-2 text-xs',
    lg: 'h-10 px-8 text-sm',
    icon: 'h-9 w-9',
  };
</script>

<button
  {type}
  {disabled}
  {onclick}
  {style}
  class={cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground',
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className
  )}
>
  {@render children?.()}
</button>
