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
    
    public partial class DeliveryNoteStatusHistory
    {
        public int HistoryId { get; set; }
        public int DeliveryNoteId { get; set; }
        public int DeliveryStatusId { get; set; }
        public string Note { get; set; }
        public int CreateUserId { get; set; }
        public System.DateTime CreateDate { get; set; }
    
        public virtual DeliveryNote DeliveryNote { get; set; }
        public virtual DeliveryStatus DeliveryStatus { get; set; }
    }
}
