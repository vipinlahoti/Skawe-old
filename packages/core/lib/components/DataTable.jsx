import Skawe from 'meteor/skawe:lib';
import { Distributions } from 'meteor/skawe:instances';
import { useTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';

const EditFormModal = ({dataItem, formField}) => {
  console.log('formField', formField);

  return (
    <Skawe.components.ModalTrigger title={`Edit ${dataItem._id}`} component={
      <div>
        <Skawe.components.Button variant="black" size="small">
          Edit
        </Skawe.components.Button>
      </div>
    }>

    </Skawe.components.ModalTrigger>
  )
}

const DataTable = ({collection, columns, formField, showEdit}) => {

  const collectionName = collection;
  const subscription = collectionName._name;
  const subscriptionList = `${subscription}.list`;

  const dataList = useTracker(() => {
    Meteor.subscribe(subscriptionList);
    return collectionName.find().fetch();
  });

  console.log(subscriptionList, dataList)

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((item, index) =>
            <th className="datatable-header" key={index}>
              <span className="datatable-header-cell-label">{item}</span>
            </th>
          )}

          {showEdit ?
            <th className="datatable-header">
              <span className="datatable-header-cell-label">Action</span>
            </th>
            : null }
        </tr>
      </thead>
      <tbody>
        {dataList.map((dataItem, index) =>
          <tr key={index}>
            {columns.map((item, index) =>
              <td className={`datatable-body-${dataItem[item]}`} key={index}>
                <span className="datatable-body-cell-label">{String(dataItem[item])}</span>
              </td>
            )}
            {showEdit ?
            <td className={`datatable-body-action`}>
              <EditFormModal
                dataItem={dataItem}
                columns={columns}
                formField={dataList[index]}
              />
            </td>
            : null }
          </tr>
        )}
      </tbody>
    </table>
  )
}

Skawe.registerComponent('DataTable', DataTable);


// <Skawe.components.SkaweForms
//   buttonText="Update"
//   fields={dataItem}
// />
