//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Security.DataLayer
{
    using System;
    using System.Collections.Generic;
    
    public partial class UserServiceAccess
    {
        public int UserServiceAccessId { get; set; }
        public int UserId { get; set; }
        public int ServiceAccessId { get; set; }
        public bool IsBlock { get; set; }
        public int CreateUserId { get; set; }
        public int CreateDate { get; set; }
        public Nullable<int> ModifyUserId { get; set; }
        public Nullable<System.DateTime> ModifyDate { get; set; }
    
        public virtual ServiceAccess ServiceAccess { get; set; }
        public virtual User User { get; set; }
    }
}
