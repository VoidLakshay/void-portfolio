"use client";

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

interface GitHubContributionsProps {
  username: string;
}

export const GitHubContributions = ({ username }: GitHubContributionsProps) => {
  return (
    <div className="w-full h-fit flex flex-col items-start justify-center gap-2 py-2">
      <h2 className="text-xl font-bold font-mono text-foreground px-2 sm:px-4 md:px-10 tracking-tight">GitHub Contributions</h2>
      <div className="w-full flex justify-center px-2 sm:px-4 md:px-10">
        <div className="w-full p-6 overflow-x-auto scrollbar-hide">
          <GitHubCalendar 
            username={username} 
            colorScheme="dark"
            theme={{
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              dark: ['#1f1f22', '#004a43', '#007a6e', '#00b3a3', '#00ebd5'],
            }}
            style={{ width: '100%' }}
            hideColorLegend
          />
        </div>
      </div>
    </div>
  );
};
