//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Afaqy_Store.DataLayer
{
    using System;
    using System.Collections.Generic;
    
    public partial class DeliveryNoteView
    {
        public int DeliveryNoteId { get; set; }
        public int POSId { get; set; }
        public string POSName_en { get; set; }
        public string POSName_ar { get; set; }
        public int DeliveryStatusId { get; set; }
        public string DeliveryStatus_en { get; set; }
        public string DeliveryStatus_ar { get; set; }
        public int CustomerId { get; set; }
        public string CustomerName_en { get; set; }
        public string CustomerName_ar { get; set; }
        public int SaleTransactionTypeId { get; set; }
        public string SaleTransactionType_en { get; set; }
        public string SaleTransactionType_ar { get; set; }
        public string DeliveryDateTime { get; set; }
        public string Note { get; set; }
        public bool IsBlock { get; set; }
        public int CreateUserId { get; set; }
        public string CreateUser_FirstName_en { get; set; }
        public string CreateUser_FirstName_ar { get; set; }
        public string CreateUser_LastName_en { get; set; }
        public string CreateUser_LastName_ar { get; set; }
        public string CreateUser_FullName_en { get; set; }
        public string CreateUser_FullName_ar { get; set; }
        public System.DateTime CreateDate { get; set; }
        public Nullable<int> ModifyUserId { get; set; }
        public string ModifyUser_FirstName_en { get; set; }
        public string ModifyUser_FirstName_ar { get; set; }
        public string ModifyUser_LastName_en { get; set; }
        public string ModifyUser_LastName_ar { get; set; }
        public Nullable<System.DateTime> ModifyDate { get; set; }
        public string ModifyUser_FullName_en { get; set; }
        public string ModifyUser_FullName_ar { get; set; }
        public int WarehouseId { get; set; }
        public string WarehouseName_en { get; set; }
        public string WarehouseName_ar { get; set; }
        public string CustomerName { get; set; }
        public Nullable<int> CustomerContactId { get; set; }
        public string ContactName_en { get; set; }
        public string ContactName_ar { get; set; }
        public string AlternativeContactName { get; set; }
        public string AlternativeContactTelephone { get; set; }
        public Nullable<int> SystemId { get; set; }
        public string SystemName { get; set; }
        public int DeliveryRequestId { get; set; }
        public string DolphinReference { get; set; }
        public Nullable<int> DolphinDeliveryId { get; set; }
        public Nullable<bool> WithInstallationService { get; set; }
    }
}
