const siteName = "IRC Whois Gallery";

import passthroughs from './src/config/passthroughs.js';
import collections from './src/config/collections.js';
import watchtargets from './src/config/watchtargets.js';
import plugins from './src/config/plugins.js';
import shortcodes from './src/config/shortcodes.js';
import templatelanguages from './src/config/templateLanguages.js';
import filters from './src/config/filters.js';
import build from './src/config/build.js';
import transforms from './src/config/transforms.js';
import chalk from 'chalk';

export default function(eleventyConfig) {
  let tasks = [
    { icon: "📚", name: "Collections", config: collections, echo: true },
    { icon: "🔌", name: "Plugins", config: plugins, echo: true },
    { icon: "⏩", name: "Shortcodes", config: shortcodes, echo: true },
    { icon: "🎛️ ", name: "Filters", config: filters, echo: true },
    { icon: "🚗", name: "Transforms", config: transforms, echo: true },
    { icon: "📂", name: "Passthroughs", config: passthroughs, echo: false },
    { icon: "📜", name: "Template Languages", config: templatelanguages, echo: false },
    { icon: "👀", name: "Watch Targets", config: watchtargets, echo: false }
  ];

  console.group("\n", "   🪐", chalk.magenta(siteName));
  console.log(chalk.white("  │"));

  for (let task of tasks) {
    let tree = tasks.indexOf(task) === tasks.length - 1;
    tree = (tasks[tasks.indexOf(task) + 1] && !tasks[tasks.indexOf(task) + 1].echo);

    if(task.echo) {
      console.group(
        chalk.white((tree)  ? "  └── " : "  ├── ") +
        chalk.yellow(task.icon) +
        chalk.yellow(" " + task.name) +
        chalk.gray(" (/src/config/" + task.name.toLowerCase().replace(/\s/g, '') + ".js)")
      );
    }

    Object.keys(task.config).forEach((taskName, index) => {
      let len = Object.keys(task.config).length - 1;
      let pre = (index === len ? "└── " : "├── ");
      let branch = tasks.indexOf(task) === tasks.length - 1;
      branch = (tasks[tasks.indexOf(task) + 1] && !tasks[tasks.indexOf(task) + 1].echo);
      
      if(task.echo) {
        console.log(
          chalk.white((branch) ? "       " : "│      ") + pre +
          chalk.green(taskName)
        );
      }
      task.config[taskName](eleventyConfig);
    });

    if(task.echo) {
      if(!tree) {
        console.log(chalk.white("│"));
      }
      console.groupEnd();
    }
  }

  console.log("\n");
  console.groupEnd();

  build(eleventyConfig);

  eleventyConfig.setServerOptions({
    showAllHosts: true,
  });

  eleventyConfig.setQuietMode(true);

  const config = {
    dir: {
      input: "src",
      output: "public",
      includes: 'assets/views',
      layouts: 'assets/views/layouts',
      data: 'data',
    },
    templateFormats: ['njk', 'md', '11ty.js'],
  };

  // Only add pathPrefix in production
  if (process.env.ELEVENTY_ENV === "production") {
    config.pathPrefix = "/irc-whois-gallery/";
  }

  return config;
}