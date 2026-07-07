<script lang="ts">
  import Card from '$lib/components/ui/card/card.svelte';
  import {
    FileText, Image, LayoutGrid, Tags, Plug, ShieldCheck, ListMusic,
    Map, MapPin, Columns2, Repeat2, AtSign, Send, Eye, GitPullRequest,
    RotateCw, Monitor, Calendar, Music, Activity, Disc, Sparkles, Rss
  } from '@lucide/svelte';

  const icons = {
    'file-text': FileText,
    image: Image,
    'layout-grid': LayoutGrid,
    tags: Tags,
    plug: Plug,
    'shield-check': ShieldCheck,
    'list-music': ListMusic,
    map: Map,
    'map-pin': MapPin,
    'columns-2': Columns2,
    'repeat-2': Repeat2,
    'at-sign': AtSign,
    send: Send,
    eye: Eye,
    'git-pull-request': GitPullRequest,
    'rotate-cw': RotateCw,
    monitor: Monitor,
    calendar: Calendar,
    music: Music,
    activity: Activity,
    disc: Disc,
    sparkles: Sparkles,
    rss: Rss
  };

  type IconKey = keyof typeof icons;

  let { icon, title, description, pro = false, proUrl, appName }: {
    icon: IconKey;
    title: string;
    description: string;
    pro?: boolean;
    proUrl?: string;
    appName?: string;
  } = $props();

  const Icon = $derived(icons[icon]);
</script>

<div class="project-card relative">
  <Card class="h-full">
    <div class="flex flex-col p-4 gap-3">
      <div class="flex items-center gap-2">
        <span class="inline-flex w-4 h-4 shrink-0 items-center justify-center text-foreground/50" aria-hidden="true">
          <Icon size={16} strokeWidth={1.5} />
        </span>
        <h3 class="text-sm font-semibold leading-none">{title}</h3>
      </div>
      <p class="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </Card>
  {#if pro && proUrl}
    <a
      href={proUrl}
      target="_blank"
      rel="noopener"
      aria-label={`Pro feature, available with ${appName} Pro`}
      class="pro-badge absolute -top-2 -right-2 inline-flex items-center justify-center rounded-md px-2.5 py-1 text-xs font-bold tracking-wider text-white ring-1 ring-inset ring-white/20 transition-transform duration-200 hover:scale-105"
    >
      Pro
    </a>
  {:else if pro}
    <span
      aria-label={appName ? `Pro feature, available with ${appName} Pro` : 'Pro feature'}
      class="pro-badge absolute -top-2 -right-2 inline-flex items-center justify-center rounded-md px-2.5 py-1 text-xs font-bold tracking-wider text-white ring-1 ring-inset ring-white/20"
    >
      Pro
    </span>
  {/if}
</div>
