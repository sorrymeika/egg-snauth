module.exports = app => {
    app.config.coreMiddleware.unshift('snauth');

    // app.addSingleton('mysql', createMysql);
};

// function createMysql(config, app) {
//     assert(config.host && config.port && config.user && config.database);
//     // 创建实例
//     const client = new Mysql(config);

//     // 做启动应用前的检查
//     app.beforeStart(async () => {
//       const rows = await client.query('select now() as currentTime;');
//       app.coreLogger.info(`[egg-mysql] init instance success, rds currentTime: ${rows[0].currentTime}`);
//     });

//     return client;
//   }