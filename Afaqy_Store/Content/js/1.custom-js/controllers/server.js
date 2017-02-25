﻿angular.module('app.serverControllers', [])

//Brand controllers ========
.controller('BrandCtrl', BrandCtrl)
.controller('BrandCreateCtrl', BrandCreateCtrl)
.controller('BrandEditCtrl', BrandEditCtrl)
.controller('BrandDetailsCtrl', BrandDetailsCtrl)

//SystemServerIP controllers ========
.controller('SystemServerIPCtrl', SystemServerIPCtrl)
.controller('SystemServerIPCreateCtrl', SystemServerIPCreateCtrl)
.controller('SystemServerIPEditCtrl', SystemServerIPEditCtrl)
.controller('SystemServerIPDetailsCtrl', SystemServerIPDetailsCtrl)

//BrandServerPort controllers ========
.controller('BrandServerPortCtrl', BrandServerPortCtrl)
.controller('BrandServerPortCreateCtrl', BrandServerPortCreateCtrl)
.controller('BrandServerPortEditCtrl', BrandServerPortEditCtrl)
.controller('BrandServerPortDetailsCtrl', BrandServerPortDetailsCtrl)

//SIMCard controllers ========
.controller('SIMCardCtrl', SIMCardCtrl)
.controller('SIMCardCreateCtrl', SIMCardCreateCtrl)
.controller('SIMCardEditCtrl', SIMCardEditCtrl)
.controller('SIMCardDetailsCtrl', SIMCardDetailsCtrl)

//SIMCardStatus controllers ========
.controller('SIMCardStatusCtrl', SIMCardStatusCtrl)
.controller('SIMCardStatusEditCtrl', SIMCardStatusEditCtrl)
.controller('SIMCardStatusDetailsCtrl', SIMCardStatusDetailsCtrl)

//Customer controllers ========
.controller('CustomerCtrl', CustomerCtrl)
.controller('CustomerDetailsCtrl', CustomerDetailsCtrl)

//ServerUnit controllers ========
.controller('ServerUnitCtrl', ServerUnitCtrl)
.controller('ServerUnitDetailsCtrl', ServerUnitDetailsCtrl)

//DeviceConfiguration controllers ========
.controller('DeviceConfigurationCtrl', DeviceConfigurationCtrl)
.controller('DeviceConfigurationCreateCtrl', DeviceConfigurationCreateCtrl)
.controller('DeviceConfigurationEditCtrl', DeviceConfigurationEditCtrl)
.controller('DeviceConfigurationDetailsCtrl', DeviceConfigurationDetailsCtrl)

//CustomerServerAccount controllers ========
.controller('CustomerServerAccountCtrl', CustomerServerAccountCtrl)
.controller('CustomerServerAccountCreateCtrl', CustomerServerAccountCreateCtrl)
.controller('CustomerServerAccountEditCtrl', CustomerServerAccountEditCtrl)
.controller('CustomerServerAccountDetailsCtrl', CustomerServerAccountDetailsCtrl)

//CustomerServerUnits controllers ========
.controller('CustomerServerUnitsCtrl', CustomerServerUnitsCtrl)
.controller('CustomerServerUnitsDetailsCtrl', CustomerServerUnitsDetailsCtrl)

//Brand functions ========
function BrandCtrl($scope, $uibModal, confirmService, global, gridService, ctrlService) {
    ctrlService.initCtrl($scope);
    gridService.initGrid($scope);
    gridService.configureExport($scope);

    $scope.create = function () {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: createActionUrl,
            controller: 'BrandCreateCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

    $scope.edit = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: editActionUrl + '/' + id,
            controller: 'BrandEditCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

    $scope.details = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: detailsActionUrl + '/' + id,
            controller: 'BrandDetailsCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

    $scope.DeleteItems = function (ev) {
        var modalOptions = deleteModalOptions;
        confirmService.showModal({}, modalOptions).then(function (result) {
            showLoading();
            var selectedIds = [];
            //get selected ids from grid
            var selectedItems = $scope.gridApi.selection.getSelectedRows();
            selectedItems.forEach(function (item) {
                selectedIds.push(item.BrandId)
            });
            //call delete confirm method and pass ids
            var url = deleteActionUrl;
            var data = { ids: selectedIds };
            global.post(url, data, function (resp) {
                if (resp) {
                    location.reload();
                }
            }, function (resp) { });
            hideLoading();
        });
    }
}

function BrandCreateCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

function BrandEditCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

function BrandDetailsCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

//SystemServerIP functions ========
function SystemServerIPCtrl($scope, $uibModal, confirmService, global, gridService, ctrlService) {
    ctrlService.initCtrl($scope);
    gridService.initGrid($scope);
    gridService.configureExport($scope);

    $scope.create = function () {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: createActionUrl,
            controller: 'SystemServerIPCreateCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

    $scope.edit = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: editActionUrl + '/' + id,
            controller: 'SystemServerIPEditCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

    $scope.details = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: detailsActionUrl + '/' + id,
            controller: 'SystemServerIPDetailsCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

    $scope.DeleteItems = function (ev) {
        var modalOptions = deleteModalOptions;
        confirmService.showModal({}, modalOptions).then(function (result) {
            showLoading();
            var selectedIds = [];
            //get selected ids from grid
            var selectedItems = $scope.gridApi.selection.getSelectedRows();
            selectedItems.forEach(function (item) {
                selectedIds.push(item.SystemServerId)
            });
            //call delete confirm method and pass ids
            var url = deleteActionUrl;
            var data = { ids: selectedIds };
            global.post(url, data, function (resp) {
                if (resp) {
                    location.reload();
                }
            }, function (resp) { });
            hideLoading();
        });
    }
}

function SystemServerIPCreateCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

function SystemServerIPEditCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

function SystemServerIPDetailsCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

//BrandServerPort functions ========
function BrandServerPortCtrl($scope, $uibModal, confirmService, global, gridService, ctrlService) {
    ctrlService.initCtrl($scope);
    gridService.initGrid($scope);
    gridService.configureExport($scope);

    $scope.create = function () {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: createActionUrl,
            controller: 'BrandServerPortCreateCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

    $scope.edit = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: editActionUrl + '/' + id,
            controller: 'BrandServerPortEditCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

    $scope.details = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: detailsActionUrl + '/' + id,
            controller: 'BrandServerPortDetailsCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

    $scope.DeleteItems = function (ev) {
        var modalOptions = deleteModalOptions;
        confirmService.showModal({}, modalOptions).then(function (result) {
            showLoading();
            var selectedIds = [];
            //get selected ids from grid
            var selectedItems = $scope.gridApi.selection.getSelectedRows();
            selectedItems.forEach(function (item) {
                selectedIds.push(item.BrandPortId)
            });
            //call delete confirm method and pass ids
            var url = deleteActionUrl;
            var data = { ids: selectedIds };
            global.post(url, data, function (resp) {
                if (resp) {
                    location.reload();
                }
            }, function (resp) { });
            hideLoading();
        });
    }
}

function BrandServerPortCreateCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

function BrandServerPortEditCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

function BrandServerPortDetailsCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

//SIMCard functions ========
function SIMCardCtrl($scope, $uibModal, confirmService, global, gridService, ctrlService) {

    ctrlService.initCtrl($scope);

    gridService.initGrid($scope);

    gridService.configureExport($scope);

    $scope.create = function () {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: createActionUrl,
            controller: 'SIMCardCreateCtrl',
            scope: $scope,
            backdrop: false,
        });

        modalInstance.result.then(null, function () { });
    }

    $scope.edit = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: editActionUrl + '/' + id,
            controller: 'SIMCardEditCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

    $scope.details = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: detailsActionUrl + '/' + id,
            controller: 'SIMCardDetailsCtrl',
            scope: $scope,
            backdrop: false,
        });

        modalInstance.result.then(null, function () { });
    }

    $scope.DeleteItems = function (ev) {

        var modalOptions = deleteModalOptions;

        confirmService.showModal({}, modalOptions).then(function (result) {
            showLoading();
            var selectedIds = [];
            //get selected ids from grid
            var selectedItems = $scope.gridApi.selection.getSelectedRows();
            selectedItems.forEach(function (item) {
                selectedIds.push(item.SIMCardId)
            });

            //call delete confirm method and pass ids
            var url = deleteActionUrl;
            var data = { ids: selectedIds };
            global.post(url, data, function (resp) {
                if (resp) {
                    location.reload();
                }
            }, function (resp) { });

            hideLoading();
        });
    }
}

function SIMCardCreateCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

function SIMCardEditCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

function SIMCardDetailsCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

//SIMCardStatus functions ========
function SIMCardStatusCtrl($scope, $uibModal, gridService, ctrlService) {

    ctrlService.initCtrl($scope);

    gridService.initGrid($scope);

    gridService.configureExport($scope);

    $scope.edit = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: editActionUrl + '/' + id,
            controller: 'SIMCardStatusEditCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

    $scope.details = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: detailsActionUrl + '/' + id,
            controller: 'SIMCardStatusDetailsCtrl',
            scope: $scope,
            backdrop: false,
        });

        modalInstance.result.then(null, function () { });
    }

}

function SIMCardStatusEditCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

function SIMCardStatusDetailsCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

//Customer functions ========
function CustomerCtrl($scope, $uibModal, confirmService, global, gridService, ctrlService) {
    ctrlService.initCtrl($scope);
    gridService.initGrid($scope);
    gridService.configureExport($scope);

    $scope.details = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: detailsActionUrl + '/' + id,
            controller: 'CustomerDetailsCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

}

function CustomerDetailsCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

//ServerUnit functions ========
function ServerUnitCtrl($scope, $uibModal, confirmService, global, gridService, ctrlService) {
    ctrlService.initCtrl($scope);
    gridService.initGrid($scope);
    gridService.configureExport($scope);

    $scope.details = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: detailsActionUrl + '/' + id,
            controller: 'ServerUnitDetailsCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

}

function ServerUnitDetailsCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

//DeviceConfiguration functions ========
function DeviceConfigurationCtrl($scope, $uibModal, confirmService, global, gridService, ctrlService) {

    ctrlService.initCtrl($scope);

    gridService.initGrid($scope);

    gridService.configureExport($scope);

    $scope.create = function () {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: createActionUrl,
            controller: 'DeviceConfigurationCreateCtrl',
            scope: $scope,
            backdrop: false,
        });

        modalInstance.result.then(null, function () { });
    }

    $scope.edit = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: editActionUrl + '/' + id,
            controller: 'DeviceConfigurationEditCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

    $scope.details = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: detailsActionUrl + '/' + id,
            controller: 'DeviceConfigurationDetailsCtrl',
            scope: $scope,
            backdrop: false,
        });

        modalInstance.result.then(null, function () { });
    }

    $scope.DeleteItems = function (ev) {

        var modalOptions = deleteModalOptions;

        confirmService.showModal({}, modalOptions).then(function (result) {
            showLoading();
            var selectedIds = [];
            //get selected ids from grid
            var selectedItems = $scope.gridApi.selection.getSelectedRows();
            selectedItems.forEach(function (item) {
                selectedIds.push(item.DeviceSIMId)
            });

            //call delete confirm method and pass ids
            var url = deleteActionUrl;
            var data = { ids: selectedIds };
            global.post(url, data, function (resp) {
                if (resp) {
                    location.reload();
                }
            }, function (resp) { });

            hideLoading();
        });
    }
}

function DeviceConfigurationCreateCtrl($scope, $uibModalInstance,global) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.getDeviceIDByIMEI = function (imei,deviceSerial,deviceId) {
        var Options = {}
        Options.Filters = [];
        Options.Filters.push({ Property: 'IMEI', Operation: 'Equal', Value: imei });
        var url = DeviceGetInfoUrl;
        global.post(url, Options, function (resp) {
            var items = resp.data
            if (items != undefined && items != null) {
                if (items.length == 1) {
                    var device = items[0];
                    console.log(JSON.stringify(device));
                    deviceSerial = device.SerialNumber;
                    deviceId = device.DeviceId;
                }
            }
        }, function (resp) {
            console.log("Error: " + error);
        }, function () {

        }, function () {

        });
    }
}

function DeviceConfigurationEditCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

function DeviceConfigurationDetailsCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

//CustomerServerAccount functions ========
function CustomerServerAccountCtrl($scope, $uibModal, confirmService, global, gridService, ctrlService) {

    ctrlService.initCtrl($scope);

    gridService.initGrid($scope);

    gridService.configureExport($scope);

    $scope.create = function () {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: createActionUrl,
            controller: 'CustomerServerAccountCreateCtrl',
            scope: $scope,
            backdrop: false,
        });

        modalInstance.result.then(null, function () { });
    }

    $scope.edit = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: editActionUrl + '/' + id,
            controller: 'CustomerServerAccountEditCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

    $scope.details = function (id) {
        showLoading();
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: detailsActionUrl + '/' + id,
            controller: 'CustomerServerAccountDetailsCtrl',
            scope: $scope,
            backdrop: false,
        });

        modalInstance.result.then(null, function () { });
    }

    $scope.DeleteItems = function (ev) {

        var modalOptions = deleteModalOptions;

        confirmService.showModal({}, modalOptions).then(function (result) {
            showLoading();
            var selectedIds = [];
            //get selected ids from grid
            var selectedItems = $scope.gridApi.selection.getSelectedRows();
            selectedItems.forEach(function (item) {
                selectedIds.push(item.CustomerServerAccountId)
            });

            //call delete confirm method and pass ids
            var url = deleteActionUrl;
            var data = { ids: selectedIds };
            global.post(url, data, function (resp) {
                if (resp) {
                    location.reload();
                }
            }, function (resp) { });

            hideLoading();
        });
    }
}

function CustomerServerAccountCreateCtrl($scope, $uibModalInstance, global) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}

function CustomerServerAccountEditCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

function CustomerServerAccountDetailsCtrl($scope, $uibModalInstance) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

//CustomerServerUnits functions ========
function CustomerServerUnitsCtrl($scope, $uibModal, confirmService, global, gridService, ctrlService) {
    ctrlService.initCtrl($scope);
    gridService.initGrid($scope);
    gridService.configureExport($scope);

    $scope.details = function (id) {
        showLoading();
        $scope.selectedCustomerId = id;
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: detailsActionUrl + '/' + id,
            controller: 'CustomerServerUnitsDetailsCtrl',
            scope: $scope,
            backdrop: false,
        });
        modalInstance.result.then(null, function () { });
    }

}

function CustomerServerUnitsDetailsCtrl($scope, $uibModalInstance, uiGridConstants, $interval, $q, uiGridExporterConstants, uiGridExporterService, global) {
    hideLoading();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    var fakeI18n = function (title) {
            var deferred = $q.defer();
            $interval(function () {
                deferred.resolve('col: ' + title);
            }, 1000, 1);
            return deferred.promise;
    };

    var gridOptions = {}

    //Pagination
    $scope.pagination = {
            paginationPageSizes: [15, 25, 50, 75, 100, "All"],
            ddlpageSize: 15,
            pageNumber: 1,
            pageSize: 15,
            totalItems: 0,

            getTotalPages: function () {
                return Math.ceil(this.totalItems / this.pageSize);
            },
            pageSizeChange: function () {
                if (this.ddlpageSize == "All")
                    this.pageSize = $scope.pagination.totalItems;
                else
                    this.pageSize = this.ddlpageSize

                this.pageNumber = 1
                $scope.GetProducts();
            },
            firstPage: function () {
                if (this.pageNumber > 1) {
                    this.pageNumber = 1
                    $scope.GetProducts();
                }
            },
            nextPage: function () {
                if (this.pageNumber < this.getTotalPages()) {
                    this.pageNumber++;
                    $scope.GetProducts();
                }
            },
            previousPage: function () {
                if (this.pageNumber > 1) {
                    this.pageNumber--;
                    $scope.GetProducts();
                }
            },
            lastPage: function () {
                if (this.pageNumber >= 1) {
                    this.pageNumber = this.getTotalPages();
                    $scope.GetProducts();
                }
            }
    };

    //ui-Grid Call
    $scope.GetProducts = function () {
            $scope.result = "color-green";
            $scope.highlightFilteredHeader = function (row, rowRenderIndex, col, colRenderIndex) {
                if (col.filters[0].term) {
                    return 'header-filtered';
                } else {
                    return '';
                }
            };
            $scope.gridOptions = {
                useExternalPagination: true,

                useExternalSorting: false,
                enableFiltering: true,
                enableRowSelection: true,
                enableSelectAll: true,
                enableGridMenu: true,
                gridMenuTitleFilter: fakeI18n,
                exporterMenuCsv: false,
                exporterMenuPdf: false,
                columnDefs: gridColumnDefs2,
                onRegisterApi: function (gridApi) {
                    $scope.gridApi = gridApi;
                    gridApi.core.on.columnVisibilityChanged($scope, function (changedColumn) {
                        $scope.columnChanged = { name: changedColumn.colDef.name, visible: changedColumn.colDef.visible };
                    });
                    gridApi.core.on.filterChanged($scope,
                        function () {
                            var grid = this.grid;
                            //reset filters
                            gridOptions.Filters = [];
                            for (var i = 0; i < grid.columns.length; i++) {
                                term = grid.columns[i].filters[0].term;
                                field = grid.columns[i].field;
                                if (term != undefined && term != null && term != '') {
                                    gridOptions.Filters.push({ Property: field, Operation: 'Like', Value: term, LogicalOperation: 'And' });
                                }
                            }
                            //console.log(JSON.stringify(gridOptions));
                            //rebind grid data
                            $scope.GetProducts();
                        });
                    gridApi.core.on.sortChanged($scope, function () {
                        var grid = this.grid;
                        //reset sort
                        gridOptions.Sorts = [];
                        for (var i = 0; i < grid.columns.length; i++) {
                            direction = grid.columns[i].sort.direction;
                            field = grid.columns[i].field;
                            priority = grid.columns[i].sort.priority
                            if (direction != undefined && direction != null && direction != '') {
                                gridOptions.Sorts.push({ Property: field, SortType: direction, Priority: priority });
                            }
                        }
                        //console.log(JSON.stringify(gridOptions));
                        //rebind grid data
                        $scope.GetProducts();
                    });
                },
                exporterAllDataFn: function () {
                    return getPage(1, $scope.gridOptions.totalItems, paginationOptions.sort)
                    .then(function () {
                        $scope.gridOptions.useExternalPagination = false;
                        $scope.gridOptions.useExternalSorting = false;
                        getPage = null;
                    });
                },
            };
            var NextPage;
            if (isNaN($scope.pagination.pageNumber)) {
                NextPage = 1;
            }else{
                NextPage = $scope.pagination.pageNumber;
            }
            var NextPageSize = $scope.pagination.pageSize;
            gridOptions.Paging = { PageNumber: NextPage, PageSize: NextPageSize };
            var url = getCustomerServerUnitsDetailsViewActionUrl;
            var formData = { customerId: $scope.selectedCustomerId, options: gridOptions };
            console.log(JSON.stringify(formData));
            global.post(url, formData, function (resp) {
                console.log(JSON.stringify("hi--------------:"+resp.data));
                $scope.pagination.totalItems = resp.data.TotalItemsCount;
                $scope.gridOptions.data = resp.data.PageItems;
                console.log(JSON.stringify(resp.data.PageItems));
                $scope.gridOptions.selectedItems = [];
            }, function (resp) {
                console.log("Error: " + error);
            }, function () {
                $scope.loaderMore = true;
            }, function () {
                $scope.loaderMore = false;
            });
    }
    
    //Default Load
    $scope.GetProducts();

    $scope.ToggoleGridFilter = function ($event) {
        $scope.gridOptions.enableFiltering = !$scope.gridOptions.enableFiltering;
        $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
    }

    $scope.ExportAllDataAsPdf = function () {
        var grid = $scope.gridApi.grid;
        var rowTypes = uiGridExporterConstants.ALL;
        var colTypes = uiGridExporterConstants.ALL;
        uiGridExporterService.pdfExport(grid, rowTypes, colTypes);
    }

    $scope.ExportVisibleDataAsPdf = function () {
        var grid = $scope.gridApi.grid;
        var rowTypes = uiGridExporterConstants.VISIBLE;
        var colTypes = uiGridExporterConstants.ALL;
        uiGridExporterService.pdfExport(grid, rowTypes, colTypes);
    }

    $scope.ExportAllDataAsCsv = function () {
        var grid = $scope.gridApi.grid;
        var rowTypes = uiGridExporterConstants.ALL;
        var colTypes = uiGridExporterConstants.ALL;
        uiGridExporterService.csvExport(grid, rowTypes, colTypes);
    }

    $scope.ExportVisibleDataAsCsv = function () {
        var grid = $scope.gridApi.grid;
        var rowTypes = uiGridExporterConstants.VISIBLE;
        var colTypes = uiGridExporterConstants.ALL;
        uiGridExporterService.csvExport(grid, rowTypes, colTypes);
    }
    

}
