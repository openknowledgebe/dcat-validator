var profile = {
    basePath: '../libs/',
    releaseDir: '../release',
    action: 'release',
    cssOptimize: 'comments',
    mini: true,
    optimize: 'closure',
    layerOptimize: 'closure',
    stripConsole: 'all',
    selectorEngine: 'acme',
    packages:[
        "dojo",
        "dijit",
        "rdfjson",
        "dbootstrap",
        "rdforms"
    ],
    layers: {
        'dojo/dojo': {
            include: ['rdforms/view/Editor',
		      'rdforms/apps/formulator/StoreManager',
                      'rdforms/apps/validator/Validator',
                      'rdforms/apps/editor/Editor',
                      'rdforms/apps/ldb/LDBrowser',
                      'dbootstrap/main'],
            boot: true,
            customBase: true
        }
    },
    staticHasFeatures: {
	'dojo-trace-api': 0,
	'dojo-log-api': 0,
	'dojo-publish-privates': 0,
	'dojo-sync-loader': 0,
	'dojo-xhr-factory': 0,
	'dojo-test-sniff': 0
    }
};
