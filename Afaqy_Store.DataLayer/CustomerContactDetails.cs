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
    
    public partial class CustomerContactDetails
    {
        public int CustomerContactDetailsId { get; set; }
        public Nullable<int> DolphinId { get; set; }
        public int CustomerContactId { get; set; }
        public int ContactMethodId { get; set; }
        public string ContactContent { get; set; }
        public Nullable<bool> IsDefault { get; set; }
        public bool IsBlock { get; set; }
        public int CreateUserId { get; set; }
        public System.DateTime CreateDate { get; set; }
        public Nullable<int> ModifyUserId { get; set; }
        public Nullable<System.DateTime> ModifyDate { get; set; }
    
        public virtual ContactMethod ContactMethod { get; set; }
        public virtual CustomerContact CustomerContact { get; set; }
    }
}