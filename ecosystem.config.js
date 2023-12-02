module.exports = {
  apps: [
    {
      script: 'gun_external_A/gun_a.js',
      watch: '.',
      cwd: './gun_external_A/.',
      ignore_watch:[ "radata", "node_modules", "*.tmp"]
    },
    {
      script: 'gun_external_B/gun_b.js',
      watch: '.',
      cwd: './gun_external_B/.',
      ignore_watch:[ "radata", "node_modules", "*.tmp"]
    },
    {
      script: 'gun_external_C/gun_c.js',
      watch: '.',
      cwd: './gun_external_C/.',
      ignore_watch:[ "radata", "node_modules" , "*.tmp"]
    },
    {
      script: 'gun_internal_0/gun_0.js',
      watch: '.',
      cwd: './gun_internal_0/.',
      ignore_watch:[ "radata", "node_modules", "*.tmp"]
    },
  ]
};
