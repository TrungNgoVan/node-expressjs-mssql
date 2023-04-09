'use strict';
const fs = require('fs-extra');
const { join } = require('path');

// load the SQL queries from the file system
const loadSqlQueries = async (folderName) => {
    // get the full path to the folder containing the SQL queries
    const filePath = join(process.cwd(), 'data', folderName);
    // read all the files in the folder
    const files = await fs.readdir(filePath);
    // select file names ending with .sql
    const sqlFiles = files.filter(f => f.endsWith('.sql'));
    const queries = {};
    // read the content of each SQL file
    for (const sqlFile of sqlFiles) {
        // read the content of the SQL file
        // join the full path to the file with the file name 
        // encoding: "UTF-8" is the default value, but it's better to be explicit
        const query = fs.readFileSync(join(filePath, sqlFile), { encoding: "UTF-8" });
        // store the content of the SQL file in the queries object
        queries[sqlFile.replace(".sql", "")] = query;
    }
    if (Object.keys(queries).length === 0) {
        throw new Error(`No SQL files found in ${filePath}`);
    }
    return queries;
}

module.exports = {
    loadSqlQueries
}
