﻿using Afaqy_Store.DataLayer;
using Afaqy_Store.Models;
using Classes.Common;
using GenericApiController.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static Classes.Common.Enums;

namespace Afaqy_Store.Controllers
{
    public class SIMCardContractController : BaseController<SIMCardContract,SIMCardContractViewModel, SIMCardContractIndexViewModel, SIMCardContractDetailsViewModel, SIMCardContractCreateBindModel,SIMCardContractEditBindModel,SIMCardContractEditModel,SIMCardContractModel<SIMCardContract>,SIMCardContractModel<SIMCardContractViewModel>>
    {
        
        public override void FuncPreDetailsView(object id, ref List<SIMCardContractDetailsViewModel> items)
        {
            filters = new List<GenericDataFormat.FilterItems>();
            filters.Add(new GenericDataFormat.FilterItems() { Property = "SIMCardContractId", Operation = GenericDataFormat.FilterOperations.Equal, Value = id });
            var requestBody = new GenericDataFormat() { Filters = filters};
            items = new SIMCardContractModel<SIMCardContractDetailsViewModel>().GetView<SIMCardContractDetailsViewModel>(requestBody).PageItems;
        }
        public override void FuncPreInitCreateView()
        {
            //prepare dropdown list for item references
            List<SIMCardProvider> simCardProviders = new SIMCardProviderModel<SIMCardProvider>().GetAsDDLst("ProviderId,ProviderName_en", "ProviderName_en");
            ViewBag.SIMCardProviderId = simCardProviders.Select(x => new Classes.Helper.CustomSelectListItem() { Text = x.ProviderName_en, Value = x.ProviderId.ToString() });

            List<Currency> currencies = new CurrencyModel<Currency>().GetAsDDLst("CurrencyId,CurrencyName_en", "CurrencyName_en");
            ViewBag.CurrencyId = currencies.Select(x => new Classes.Helper.CustomSelectListItem() { Text = x.CurrencyName_en, Value = x.CurrencyId.ToString() });
        }
        public override void FuncPreCreate(ref SIMCardContractCreateBindModel model)
        {
            model.CreateUserId = User.UserId;
            model.CreateDate = DateTime.Now;
        }
        public override void FuncPreInitEditView(object id, ref SIMCardContract EditItem, ref SIMCardContractEditModel model)
        {
            if (EditItem == null)
            {
                //get the item by id
                EditItem = new SIMCardContractModel<SIMCardContract>().Get(id);
            }
            if (EditItem != null)
            {
                model = new SIMCardContractEditModel();
                model.EditItem = EditItem;
                var selectedItem = EditItem;
                List<SIMCardProvider> simCardProviders = new SIMCardProviderModel<SIMCardProvider>().GetAsDDLst("ProviderId,ProviderName_en", "ProviderName_en");
                model.SIMCardProvider = simCardProviders.Select(x => new Classes.Helper.CustomSelectListItem() { Text = x.ProviderName_en, Value = x.ProviderId.ToString(), Selected = (selectedItem.SIMCardProviderId == x.ProviderId) });
                List<Currency> currencies = new CurrencyModel<Currency>().GetAsDDLst("CurrencyId,CurrencyName_en", "CurrencyName_en");
                model.Currency = currencies.Select(x => new Classes.Helper.CustomSelectListItem() { Text = x.CurrencyName_en, Value = x.CurrencyId.ToString() , Selected = (selectedItem.CurrencyId == x.CurrencyId)});
            }
        }
        public override void FuncPreEdit(ref object id, ref SIMCardContractEditBindModel EditItem)
        {
            id = EditItem.SIMCardContractId;
            EditItem.ModifyUserId = User.UserId;
            EditItem.ModifyDate = DateTime.Now;
        }
        public override void FuncPreExport(ref GenericDataFormat ExportRequestBody, ref string ExportFileName)
        {
            ExportFileName = "SIMCardContracts.xlsx";
            string properties = string.Join(",", typeof(SIMCardContractView).GetProperties().Select(x => x.Name).Where(x => !x.Contains("_ar")));
            ExportRequestBody = new GenericDataFormat() { Includes = new GenericDataFormat.IncludeItems() { Properties = properties, } };
        }

    }
}