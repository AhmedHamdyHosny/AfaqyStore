﻿using Afaqy_Store.Models;
using Classes.Utilities;
using Models;
using Security.DataLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Security.Models
{
    public class SystemRoleModel<TModel> : GenericModel<TModel> where TModel : class
    {
        const string ApiRoute = "api/ApiSystemRole/";
        private static string ApiUrl = SiteConfig.ApiUrl;
        public SystemRoleModel() : base(ApiUrl, ApiRoute)
        {
        }
    }

    public class SystemRoleViewModel : Role
    {
        private UserViewModel _createUser = null;
        private UserViewModel _modifyUser = null;
        public UserViewModel CreateUser
        {
            get
            {
                if (_createUser == null)
                {
                    new UserModel<UserViewModel>().Get_Create_Modify_User(this.CreateUserId, this.ModifyUserId, ref this._createUser, ref this._modifyUser);
                }
                return _createUser;
            }
            set
            {
                _createUser = value;
            }
        }
        public UserViewModel ModifyUser
        {
            get
            {
                return _modifyUser;
            }
            set
            {
                _modifyUser = value;
            }
        }
        public string Block
        {
            get
            {
                return this.IsBlock ? Resources.Resource.True : Resources.Resource.False;
            }
        }
        internal void BindCreate_Modify_User()
        {
            var tempUser = this.CreateUser;
        }
    }

    public class SystemRoleIndexViewModel : Role
    {

    }
    public class SystemRoleDetailsViewModel : SystemRoleViewModel
    {

    }

    [Bind(Include = "RoleId,RoleName_en,RoleName_ar,SystemRoleServiceAccess")]
    public class SystemRoleCreateBindModel : Role
    {
        public SystemServiceAccessViewModel.CustSystemAccess[][] SystemRoleServiceAccess { get; set; }
    }

    [Bind(Include = "RoleId,RoleName_en,RoleName_ar,Active,CreateUserId,CreateDate")]
    public class SystemRoleEditBindModel : Role
    {
    }
    public class SystemRoleEditModel
    {
        public Role EditItem { get; set; }
        public IEnumerable<Classes.Helper.CustomSelectListItem> TechniqueCompany { get; set; }
    }
}