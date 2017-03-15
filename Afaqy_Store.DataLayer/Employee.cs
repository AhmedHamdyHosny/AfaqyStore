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
    
    public partial class Employee
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Employee()
        {
            this.DeliveryDevice = new HashSet<DeliveryDevice>();
            this.DeliveryNote = new HashSet<DeliveryNote>();
        }
    
        public int EmployeeId { get; set; }
        public string FirstName_en { get; set; }
        public string FirstName_ar { get; set; }
        public string LastName_en { get; set; }
        public string LastName_ar { get; set; }
        public string PhoneNumber { get; set; }
        public string MobileNumber { get; set; }
        public string ResidencyNumber { get; set; }
        public Nullable<int> CountryId { get; set; }
        public Nullable<decimal> Salary { get; set; }
        public Nullable<int> DepartmentId { get; set; }
        public Nullable<int> ManagerId { get; set; }
        public Nullable<int> BranchId { get; set; }
        public Nullable<System.DateTime> JoinDate { get; set; }
        public Nullable<int> UserId { get; set; }
        public bool IsBlock { get; set; }
        public int CreateUserId { get; set; }
        public System.DateTime CreateDate { get; set; }
        public Nullable<int> ModifyUserId { get; set; }
        public Nullable<System.DateTime> ModifyDate { get; set; }
    
        public virtual Branch Branch { get; set; }
        public virtual Country Country { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DeliveryDevice> DeliveryDevice { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DeliveryNote> DeliveryNote { get; set; }
        public virtual Department Department { get; set; }
    }
}
