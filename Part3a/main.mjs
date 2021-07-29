import AWS from 'aws-sdk';
import promptPkg from 'prompt-sync';
const prompt = promptPkg({
  sigint: true
});
let tableName = prompt(`The name of a DynamoDB table:`);
let partitionKey = prompt(`Partition key: `);
let sortKey = prompt(`Sort key:`);


// Set the region 
AWS.config.update({
  region: 'us-east-1',

});
// Create DynamoDB service object
var ddb = new AWS.DynamoDB({
  apiVersion: '2012-08-10'
});

var params = {
  ExpressionAttributeValues: {
    ':c': {
      S: partitionKey
    },
    ':p': {
      N: sortKey
    }
  },
  KeyConditionExpression: 'policy_id = :p and county = :c',
  TableName: tableName
};

ddb.query(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    //console.log("Success", data.Items);
    data.Items.forEach(function (element, index, array) {
      console.log("-----------------------");
      console.log(`Policy_id:${element.policy_id.N}\nCounty:${element.county.S}\nConstruction:${element.construction.S}\nLine:${element.line.S}\nStatecode:${element.statecode.S}\nPoint Longitude:${element.point_longitude.N}\nPoint Latitude:${element.point_latitude.N}`);
      console.log("-----------------------");
    });
  }
});