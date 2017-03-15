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
    
    public partial class DeviceView
    {
        public int DeviceId { get; set; }
        public string SerialNumber { get; set; }
        public string IMEI { get; set; }
        public int DeviceModelTypeId { get; set; }
        public string DeviceModelTypeName { get; set; }
        public int DeviceStatusId { get; set; }
        public string DeviceStatus_en { get; set; }
        public string DeviceStatus_ar { get; set; }
        public string Firmware { get; set; }
        public Nullable<int> BranchId { get; set; }
        public string BranchName_en { get; set; }
        public string BranchName_ar { get; set; }
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
    }
}
