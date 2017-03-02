﻿using Afaqy_Store.DataLayer;
using Afaqy_Store.Models;
using Classes.Common;
using GenericApiController.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Afaqy_Store.Controllers
{
    public class DeviceConfigurationController : BaseController<DeviceSIM,DeviceSIMViewModel, DeviceSIMIndexViewModel, DeviceSIMDetailsViewModel, DeviceSIMCreateBindModel, DeviceSIMEditBindModel, DeviceSIMEditModel, DeviceSIM, DeviceSIMModel<DeviceSIM>, DeviceSIMModel<DeviceSIMViewModel>>
    {
        public override void FuncPreDetailsView(object id, ref List<DeviceSIMDetailsViewModel> items)
        {
            filters = new List<GenericDataFormat.FilterItems>();
            filters.Add(new GenericDataFormat.FilterItems() { Property = "DeviceSIMId", Operation = GenericDataFormat.FilterOperations.Equal, Value = id });
            var requestBody = new GenericDataFormat() { Filters = filters};
            items = new DeviceSIMModel<DeviceSIMDetailsViewModel>().Get(requestBody);
        }
        public override void FuncPreCreate(ref DeviceSIMCreateBindModel[] items, FormCollection formCollection)
        {
            items = items.Select(x =>
            {
                x.CreateUserId = User.UserId;
                x.CreateDate = DateTime.Now;
                //x.Device = new DeviceModel<Device>().Get(x.DeviceId);
                //x.Device.DeviceStatusId = (int)DBEnums.DeviceStatus.Connted_with_SIM_card;
                //x.SIMCard = new SIMCardModel<SIMCard>().Get(x.SIMCardId);
                //x.SIMCard.SIMCardStatusId = (int)DBEnums.SIMCardStatus.Linked_with_device;
                return x;
            }).ToArray();
        }
        
        public override void FuncPreInitEditView(object id, ref DeviceSIM EditItem, ref DeviceSIMEditModel model)
        {
            if (EditItem == null)
            {
                //get the item by id
                EditItem = new DeviceSIMModel<DeviceSIM>().Get(id);
            }
            if (EditItem != null)
            {
                model = new DeviceSIMEditModel();
                model.EditItem = EditItem;
                
            }
        }
        public override void FuncPreEdit(ref object id, ref DeviceSIMEditBindModel EditItem)
        {
            id = EditItem.DeviceSIMId;
            EditItem.ModifyUserId = User.UserId;
            EditItem.ModifyDate = DateTime.Now;
        }
        public override void FuncPreExport(ref GenericDataFormat ExportRequestBody, ref string ExportFileName)
        {
            ExportFileName = "DeviceConfiguration.xlsx";
            string properties = string.Join(",", typeof(DeviceSIMView).GetProperties().Select(x => x.Name).Where(x => !x.Contains("_ar"))); ;
            ExportRequestBody = new GenericDataFormat() { Includes = new GenericDataFormat.IncludeItems() { Properties = properties, } };
        }
    }
}