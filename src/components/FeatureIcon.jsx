import { Radar, Rocket, Sparkles, Users } from "lucide-react";

const iconMap = {
  radar: Radar,
  rocket: Rocket,
  sparkles: Sparkles,
  users: Users,
};

function FeatureIcon({ name }) {
  const Icon = iconMap[name] ?? Sparkles;

  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-lava/10 text-amber-100 shadow-soft">
      <Icon className="h-5 w-5" />
    </span>
  );
}

export default FeatureIcon;
