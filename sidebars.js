module.exports = {
  Balls: [
    'introduction',
    {
      type: 'category',
      label: 'Installation',
      items: [
        'getting-started/quick-start',
        'getting-started/install',
        'getting-started/manual',
        'getting-started/build-from-source',
        'getting-started/hive',
        'getting-started/docker',
        'getting-started/bee-clef',
        'getting-started/gateway',
        'getting-started/connectivity'
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Working With Bee',
      items: [
        'working-with-bee/configuration',
        'working-with-bee/debug-api',
        'working-with-bee/logs-and-files',
        'working-with-bee/bee-tools',
        'working-with-bee/cashing-out',
        'working-with-bee/monitoring',
        'working-with-bee/backups',
        'working-with-bee/upgrading-bee',
        'working-with-bee/uninstalling-bee'
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Using Bee',
      items: [
        'using-bee/introduction',
        'using-bee/upload-and-download',
        'using-bee/upload-a-directory',
        'using-bee/host-your-website',
        'using-bee/syncing',
        'using-bee/keep-your-data-alive',
        'using-bee/pinning',
        'using-bee/light-nodes'
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Dapps on Swarm',
      items: [
        'dapps-on-swarm/introduction'
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'FAQ'
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Basic Usage',
    //   items: [
    //     'getting-started/working-with-your-node',
    //     'getting-started/upload-and-download',
    //     'getting-started/upload-a-directory',
    //     'getting-started/host-your-website-using-ens',
    //     'getting-started/store-with-encryption'
    //   ],
    //   collapsed: false,
    // },
    // {
    //   type: 'category',
    //   label: 'Maintainance',
    //   items: [
    //     'maintenance/backups'
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Basic Usage',
    //   items: [
    //     'getting-started/working-with-your-node',
    //     'getting-started/upload-and-download',
    //     'getting-started/upload-a-directory',
    //     'getting-started/host-your-website-using-ens',
    //     'getting-started/store-with-encryption'
    //   ],
    //   collapsed: false,
    // },
    // {
    //   type: 'category',
    //   label: 'Advanced Usage',
    //   items: [
    //     'advanced/pss',
    //     'advanced/tags',
    //     'advanced/persistence',
    //     'advanced/swap',
    //     'advanced/starting-a-test-network',
    //     'advanced/large-node-operators'
    //   ],
    // },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference/api-reference'
      ],
    },
    {
      type: 'category',
      label: 'Bee Developers',
      items: [
        'bee-developers/useful-dev-info'
      ],
    },
    {
      type: 'category',
      label: 'Join Us',
      items: [
        'community/community'
      ],
      collapsed: false
    }
  ]
};