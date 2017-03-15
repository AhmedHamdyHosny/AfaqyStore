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
    
    public partial class DeliveryDevice
    {
        public int DeliveryItemId { get; set; }
        public int DeliveryDetailsId { get; set; }
        public int DeviceId { get; set; }
        public Nullable<int> EmployeeId { get; set; }
        public Nullable<System.DateTime> InstallingDateTime { get; set; }
        public string CarPlateNum { get; set; }
        public string Note { get; set; }
        public bool IsBlock { get; set; }
        public int CreateUserId { get; set; }
        public System.DateTime CreateDate { get; set; }
        public Nullable<int> ModifyUserId { get; set; }
        public Nullable<System.DateTime> ModifyDate { get; set; }
    
        public virtual DeliveryDetails DeliveryDetails { get; set; }
        public virtual Device Device { get; set; }
        public virtual Employee Employee { get; set; }
    }
}