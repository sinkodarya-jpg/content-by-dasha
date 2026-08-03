"use client";

type Props = {
  followers: string;
  engagementRate: string;
  audience: string[];
  postReach: string[];
  bestPosts: string[];
};

export default function MetricsTab({
  followers,
  engagementRate,
  audience,
  postReach,
  bestPosts,
}: Props) {
  return (
    <section className="flex flex-col">

      {/* Intro */}
      <p className="max-w-md text-xs leading-relaxed text-neutral-600 md:text-sm">
        Below you can find statistics from my profile for the latest
        period. The information is updated on the first day of every
        month.
      </p>

      {/* Main Numbers */}
      <div className="mt-8 flex flex-col gap-2 md:mt-10 md:flex-row md:items-end md:justify-between">
        <p className="text-3xl font-bold tracking-tight md:text-4xl">
          {followers} followers
        </p>

        <p className="text-3xl font-bold tracking-tight md:text-4xl">
          engagement rate — {engagementRate}
        </p>
      </div>

      {/* Audience */}
      <section className="mt-14">
        <p className="mb-6 text-xs lowercase text-neutral-600">
          audience
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {audience.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Audience statistics ${index + 1}`}
              className="block h-auto w-full"
            />
          ))}
        </div>
      </section>

      {/* Post Reach */}
      <section className="mt-14">
        <p className="mb-6 text-xs lowercase text-neutral-600">
          post reach
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {postReach.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Post reach statistics ${index + 1}`}
              className="block h-auto w-full"
            />
          ))}
        </div>
      </section>

      {/* Best Performing Posts */}
      <section className="mt-14">
        <p className="mb-6 text-xs lowercase text-neutral-600">
          best performing posts
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {bestPosts.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Best performing post ${index + 1}`}
              className="block h-auto w-full"
            />
          ))}
        </div>
      </section>

    </section>
  );
}