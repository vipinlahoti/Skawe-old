import { getSetting, registerSetting } from 'meteor/vulcan:core';
import { HTTP } from 'meteor/http';
import { Instances } from '../../modules/instances/index.js';

const extractBase = getSetting('serverBaseUrl');
const extractBaseFull = getSetting('serverBaseUrlFull');
const settings = getSetting('serverAPI');

if (settings && extractBase && extractBaseFull) {
  if(!settings && !extractBase && !extractBaseFull) {
    // fail silently to still let the post be submitted as usual
    console.log("Couldn't find an API key! Please add it to your settings."); // eslint-disable-line
    return null;
  }

  Instances.serverAPI = {
    getData(args) {
      const data = extractMeta(args);
    
      return {
        data
      };
    }
  }

  const extractMeta = function (params) {
    let result;

    if (params.method === 'GET') {
      if (params.type === 'full') {
        if (params.filter) {
          result = HTTP.call('GET', `${extractBaseFull}/${params.url}`, {
            'headers': {
              'Authorization': `Bearer ${settings}`,
              'Content-Type': 'application/json',
              'X-Filter': '{"label": {"+contains": "One-Click"}}'
            }
          });
        } else {
          result = HTTP.call('GET', `${extractBaseFull}/${params.url}`, {
            'headers': {
              'Authorization': `Bearer ${settings}`,
              'Content-Type': 'application/json'
            }
          });
        }

      } else {
        result = HTTP.call('GET', `${extractBase}/${params.url}`, {
          'headers': {
            'Authorization': `Bearer ${settings}`,
            'Content-Type': 'application/json'
          }
        });
      }

    } else if (params.method === 'POST') {
      if (params.type === 'full') {  
        result = HTTP.call('POST', `${extractBaseFull}/${params.url}`, {
          'headers': {
            'Authorization': `Bearer ${settings}`,
            'Content-Type': 'application/json'
          },
          data: params.data
        });

      } else {
        result = HTTP.call('POST', `${extractBase}/${params.url}`, {
          'headers': {
            'Authorization': `Bearer ${settings}`,
            'Content-Type': 'application/json'
          },
          data: params.data
        });
      }
    
    } else if (params.method === 'PUT') {
      if (params.type === 'full') {  
        result = HTTP.call('PUT', `${extractBaseFull}/${params.url}`, {
          'headers': {
            'Authorization': `Bearer ${settings}`,
            'Content-Type': 'application/json'
          },
          data: params.data
        });

      } else {
        result = HTTP.call('PUT', `${extractBase}/${params.url}`, {
          'headers': {
            'Authorization': `Bearer ${settings}`,
            'Content-Type': 'application/json'
          },
          data: params.data
        });
      }
    
    } else {
      if (params.type === 'full') {  
        result = HTTP.del(`${extractBaseFull}/${params.url}`, {
          'headers': {
            'Authorization': `Bearer ${settings}`,
            'Content-Type': 'application/json'
          }
        });

      } else {
        result = HTTP.del(`${extractBase}/${params.url}`, {
          'headers': {
            'Authorization': `Bearer ${settings}`,
            'Content-Type': 'application/json'
          }
        });        
      }
    }

    try {
      if (result.statusCode === 200){
        return result;
      } else {
        console.log('Failed to fetch');
      }
    
    } catch (error) {
      console.log('// ServerAPI error') // eslint-disable-line
      console.log(error); // eslint-disable-line
    }
  }
}
