const { BigQuery } = require('@google-cloud/bigquery');

const bigquery = new BigQuery();


async function queryData() {
  const query = "SELECT * FROM ML.WEIGHTS(MODEL `pandera-bi-demo.satya_datasets.boston_linear_regression`)";

  const options = {
    query: query,
    location: 'US',
  };

  try {
    const [job] = await bigquery.createQueryJob(options);
    const [rows] = await job.getQueryResults();
    return rows;
  } catch (error) {
    console.error('ERROR:', error);
  }
}

module.exports = {
  queryData,
};