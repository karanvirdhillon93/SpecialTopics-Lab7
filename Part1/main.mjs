import csv from 'csv-parser';
import {
    createReadStream
} from 'fs';
import AWS from 'aws-sdk';

var ddb = new AWS.DynamoDB({
    apiVersion: '2012-08-10'
});

// Set the region 
AWS.config.update({
    region: 'us-east-1',
    maxRetries: 15,
    retryDelayOptions: {
        base: 500
    }
});

let dynamoDB = new AWS.DynamoDB();

function CSVtoAttributeFormat(csvRecord) {
    return {
        TableName: 'insurance_data',
        Item: {
            policy_id: {
                'N': csvRecord.policy_id
            },
            statecode: {
                'S': csvRecord.statecode
            },
            county: {
                'S': csvRecord.county
            },
            eq_site_limit: {
                'N': csvRecord.eq_site_limit
            },
            hu_site_limit: {
                'N': csvRecord.hu_site_limit
            },
            fl_site_limit: {
                'N': csvRecord.fl_site_limit
            },
            tiv_2011: {
                'N': csvRecord.tiv_2011
            },
            tiv_2012: {
                'N': csvRecord.tiv_2012
            },
            eq_site_deductible: {
                'N': csvRecord.eq_site_deductible
            },
            hu_site_deductible: {
                'N': csvRecord.hu_site_deductible
            },
            fl_site_deductible: {
                'N': csvRecord.fl_site_deductible
            },
            fr_site_deductible: {
                'N': csvRecord.fr_site_deductible
            },
            point_latitude: {
                'N': csvRecord.point_latitude
            },
            point_longitude: {
                'N': csvRecord.point_longitude
            },
            line: {
                'S': csvRecord.line
            },
            construction: {
                'S': csvRecord.construction
            },
            point_granularity: {
                'N': csvRecord.point_granularity
            }

        }

    };
}

const results = [];
createReadStream('insurance_data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        for (let r of results) {
            let params = CSVtoAttributeFormat(r);
            dynamoDB.putItem(params, (e, d) => {
                if (e) {
                    console.log(JSON.stringify(e));
                } else {
                    console.log("Success", JSON.stringify(params));
                }
            });
        }
    });
