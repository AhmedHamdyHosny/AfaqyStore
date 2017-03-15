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
    
    public partial class DeliveryRequest
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public DeliveryRequest()
        {
            this.DeliveryNote = new HashSet<DeliveryNote>();
            this.DeliveryRequestDetails = new HashSet<DeliveryRequestDetails>();
        }
    
        public int DeliveryRequestId { get; set; }
        public int POSId { get; set; }
        public int WarehouseId { get; set; }
        public int DeliveryRequestStatusId { get; set; }
        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public int SaleTransactionTypeId { get; set; }
        public System.DateTime DeliveryDateTime { get; set; }
        public string Note { get; set; }
        public bool IsBlock { get; set; }
        public int CreateUserId { get; set; }
        public System.DateTime CreateDate { get; set; }
        public Nullable<int> ModifyUserId { get; set; }
        public Nullable<System.DateTime> ModifyDate { get; set; }
    
        public virtual Customer Customer { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DeliveryNote> DeliveryNote { get; set; }
        public virtual DeliveryRequestStatus DeliveryRequestStatus { get; set; }
        public virtual PointOfSale PointOfSale { get; set; }
        public virtual SaleTransactionType SaleTransactionType { get; set; }
        public virtual Warehouse Warehouse { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DeliveryRequestDetails> DeliveryRequestDetails { get; set; }
    }
}
