{
  "configuration": {
    "viewerId": "lc",
    "modules": [
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogViewModel",
            "id": "LogViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogModule",
        "moduleName": "Log",
        "views": [
          {
            "markup": "Mapping/modules/Log/LogView.html",
            "viewModelId": "LogViewModel",
            "region": "ApplicationRegion",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogView",
            "id": "LogView"
          }
        ]
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Menu.MenuModule",
        "moduleName": "Menu",
        "configuration": {
          "menus": [
            {
              "defaultIconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
              "items": [
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-add-a-feature",
                  "iconUri": "Resources/Images/Icons/Toolbar/feature-create-24.png",
                  "command": "ShowFeatureTemplatePicker",
                  "description": "@language-menu-add-a-feature-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-zoom-to-layer",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-extent-24.png",
                  "command": "ZoomToLayerExtent",
                  "description": "@language-menu-zoom-to-layer-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-zoom-to-visible-scale",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-visible-extent-24.png",
                  "command": "ZoomToLayerVisibleScale",
                  "description": "@language-menu-zoom-to-visible-scale-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-visualization",
                  "iconUri": "Resources/Images/Icons/Toolbar/visualizations-24.png",
                  "command": "ShowVisualizationView",
                  "description": "@language-menu-visualization-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-remove-user-added-layer",
                  "iconUri": "Resources/Images/Icons/Toolbar/layer-remove-24.png",
                  "command": "RemoveUserAddedLayer",
                  "description": "@language-menu-remove-user-added-layer-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-label-options-toggle",
                  "iconUri": "Resources/Images/Icons/Toolbar/label-24.png",
                  "command": "ToggleDynamicLabels",
                  "description": "@language-menu-label-options-toggle-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-label-options",
                  "iconUri": "Resources/Images/Icons/Toolbar/label-options-24.png",
                  "command": "ShowLabelOptionsView",
                  "description": "@language-menu-label-options-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-layer-addition-edit-layer-properties",
                  "iconUri": "Resources/Images/Icons/Toolbar/layer-options-24.png",
                  "command": "ShowLayerPropertiesView",
                  "description": "@language-layer-addition-edit-layer-properties-desc"
                }
              ],
              "id": "LayerActions",
              "description": "@language-layer-actions-desc"
            },
            {
              "items": [
                {
                  "text": "@language-menu-switch-to-legend",
                  "iconUri": "Resources/Images/Icons/legend-16.png",
                  "command": "SwitchToLegendView",
                  "description": "@language-menu-switch-to-legend-desc"
                },
                {
                  "text": "@language-layerDrawingOrder-button-title",
                  "description": "@language-layerDrawingOrder-button-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-reorder-24.png",
                  "command": "OpenLayerDrawingOrderGroups"
                }
              ],
              "id": "LayerListActions",
              "description": "@language-layerlist-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png"
            },
            {
              "items": [
                {
                  "text": "@language-menu-switch-to-layerlist",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
                  "command": "SwitchToLayerView",
                  "description": "@language-menu-switch-to-layerlist-desc"
                },
                {
                  "text": "@language-layerDrawingOrder-button-title",
                  "description": "@language-layerDrawingOrder-button-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-reorder-24.png",
                  "command": "OpenLayerDrawingOrderGroups"
                }
              ],
              "id": "LegendActions",
              "description": "@language-layerlist-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png"
            },
            {
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "hideOnDisable": true,
                  "text": "@language-feature-details-expanded",
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-tabs-24.png",
                  "description": "@language-feature-details-expanded-desc",
                  "batch": [
                    {
                      "commandParameter": "{{context}}",
                      "command": "ShowFeatureDetailsExpanded",
                      "abortBatchOnFailure": true
                    },
                    {
                      "command": "CloseDataFrame"
                    }
                  ]
                },
                {
                  "hideOnDisable": true,
                  "commandParameter": "{{context}}",
                  "description": "@language-feature-details-compact-desc",
                  "text": "@language-feature-details-compact",
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-compact-24.png",
                  "command": "ShowFeatureDetailsCompact"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-buffer-identify-feature",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "command": "IdentifyBufferedFeature",
                  "description": "@language-menu-buffer-identify-feature-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-feature-editing-edit",
                  "iconUri": "Resources/Images/Icons/Toolbar/feature-edit-24.png",
                  "command": "StartEditingAttributesAndGeometryFeature",
                  "description": "@language-feature-editing-edit-desc"
                },
                {
                  "text": "@language-feature-editing-cut-text",
                  "description": "@language-feature-editing-cut-desc",
                  "iconUri": "Resources/Images/Icons/polygon-cut-24.png",
                  "hideOnDisable": true,
                  "command": "CutFeatureInteractive",
                  "commandParameter": "{{context}}"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-native-attach-file",
                  "iconUri": "Resources/Images/Icons/Toolbar/attach-file-photo-24.png",
                  "command": "AttachFileToFeature",
                  "description": "@language-native-file-from-browser"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-zoom",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-feature-24.png",
                  "command": "ZoomToFeature",
                  "description": "@language-menu-zoom-description"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-common-pan",
                  "iconUri": "Resources/Images/Icons/Toolbar/pan-24.png",
                  "command": "PanToFeature",
                  "description": "@language-common-pan-description"
                },
                {
                  "hideOnDisable": true,
                  "commandParameter": "{{context}}",
                  "description": "@language-menu-run-report-desc",
                  "text": "@language-menu-run-report",
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "command": "ListReports"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-results-add-feature",
                  "iconUri": "Resources/Images/Icons/add-24.png",
                  "description": "@language-menu-results-add-feature-desc",
                  "batch": [
                    {
                      "command": "HideFeatureDetails"
                    },
                    {
                      "commandParameter": "{{context}}",
                      "command": "AddFeatureToResults",
                      "abortBatchOnFailure": true
                    }
                  ]
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-results-remove-feature",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "description": "@language-menu-results-remove-feature-desc",
                  "batch": [
                    {
                      "command": "HideFeatureDetails"
                    },
                    {
                      "commandParameter": "{{context}}",
                      "command": "RemoveFeatureFromResults",
                      "abortBatchOnFailure": true
                    }
                  ]
                },
                {
                  "text": "@language-menu-copy-to-drawings",
                  "description": "@language-menu-copy-to-drawings-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/add-to-draw-layer-24.png",
                  "command": "AddMarkupFeature",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                }
              ],
              "id": "FeatureActions",
              "description": "@language-feature-actions-description"
            },
            {
              "defaultIconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
              "items": [
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-maptip-actions-view-details",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "description": "@language-menu-maptip-actions-view-details-desc",
                  "command": "ShowFeatureDetailsFromMaptip"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-run-report",
                  "commandParameter": "{{context}}",
                  "command": "ListReports",
                  "description": "@language-menu-run-report-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-feature-editing-edit",
                  "iconUri": "Resources/Images/Icons/Toolbar/feature-edit-24.png",
                  "command": "StartEditingAttributesAndGeometryFeature",
                  "description": "@language-feature-editing-edit-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-results-remove-feature",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "description": "@language-menu-results-remove-feature-desc",
                  "batch": [
                    {
                      "command": "HideFeatureDetails"
                    },
                    {
                      "commandParameter": "{{context}}",
                      "command": "RemoveFeatureFromResults",
                      "abortBatchOnFailure": true
                    }
                  ]
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-results-add-feature",
                  "iconUri": "Resources/Images/Icons/add-24.png",
                  "description": "@language-menu-results-add-feature-desc",
                  "batch": [
                    {
                      "command": "HideFeatureDetails"
                    },
                    {
                      "commandParameter": "{{context}}",
                      "command": "AddFeatureToResults",
                      "abortBatchOnFailure": true
                    }
                  ]
                },
                {
                  "text": "@language-toolbar-markup-change-markup-style",
                  "description": "@language-toolbar-markup-change-markup-style-tooltip",
                  "command": "CreateMarkupStyleView",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-common-edit",
                  "description": "@language-common-edit",
                  "command": "EditClickableFeature",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-common-delete",
                  "description": "@language-common-delete",
                  "command": "DeleteClickableFeature",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-collaboration-edit-event-message",
                  "description": "@language-collaboration-edit-event-message-desc",
                  "command": "ShowEditCollaborationGraphicMessageView",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-collaboration-open-event-image",
                  "description": "@language-collaboration-open-event-image-desc",
                  "command": "OpenEventFeatureImage",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                }
              ],
              "id": "MapTipActions",
              "description": "@language-menu-maptip-actions-desc"
            },
            {
              "items": [
                {
                  "hideOnDisable": true,
                  "description": "@language-results-toggle-table-view-desc",
                  "text": "@language-results-toggle-table-view",
                  "batch": [
                    {
                      "commandParameter": "{{context}}",
                      "command": "ShowResultsTable",
                      "abortBatchOnFailure": true
                    },
                    {
                      "command": "CloseDataFrame"
                    }
                  ],
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-table-24.png",
                  "libraryId": "Mapping.Infrastructure"
                },
                {
                  "hideOnDisable": true,
                  "commandParameter": "{{context}}",
                  "description": "@language-menu-identify-buffered-feature-set-collection-desc",
                  "text": "@language-menu-identify-buffered-feature-set-collection",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
                  "command": "IdentifyBufferedFeatureSetCollection"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-show-charting-view",
                  "iconUri": "Resources/Images/Icons/Toolbar/charting-24.png",
                  "command": "ShowChartingView",
                  "description": "@language-menu-show-charting-view-desc"
                },
                {
                  "hideOnDisable": true,
                  "commandParameter": {
                    "fsc": "{{context}}",
                    "format": "csv"
                  },
                  "description": "@language-menu-export-results-to-csv-desc",
                  "text": "@language-menu-export-results-to-csv",
                  "iconUri": "Resources/Images/Icons/Toolbar/csv-export-24.png",
                  "command": "ExportResultsTo"
                },
                {
                  "hideOnDisable": true,
                  "commandParameter": {
                    "fsc": "{{context}}",
                    "format": "xlsx"
                  },
                  "description": "@language-menu-export-results-to-xlsx-desc",
                  "text": "@language-menu-export-results-to-xlsx",
                  "iconUri": "Resources/Images/Icons/Toolbar/xlsx-export-24.png",
                  "command": "ExportResultsTo"
                },
                {
                  "hideOnDisable": true,
                  "commandParameter": {
                    "fsc": "{{context}}",
                    "format": "shp"
                  },
                  "description": "@language-menu-export-results-to-shp-desc",
                  "text": "@language-menu-export-results-to-shp",
                  "iconUri": "Resources/Images/Icons/Toolbar/shapefile-export-24.png",
                  "command": "ExportResultsTo"
                },
                {
                  "hideOnDisable": true,
                  "commandParameter": "{{context}}",
                  "description": "@language-menu-run-report-desc",
                  "text": "@language-menu-run-report",
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "command": "ListReports"
                },
                {
                  "hideOnDisable": false,
                  "text": "@language-menu-browse-saved-results",
                  "iconUri": "Resources/Images/Icons/Toolbar/open-24.png",
                  "command": "ListSelections",
                  "description": "@language-menu-browse-saved-results-desc"
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": "{{context}}",
                  "description": "@language-menu-save-results-desc",
                  "text": "@language-menu-save-results",
                  "iconUri": "Resources/Images/Icons/Toolbar/save-24.png",
                  "command": "ShowSaveSelectionDialog"
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": "{{context}}",
                  "description": "@language-menu-combine-results-desc",
                  "text": "@language-menu-combine-results",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-results-24.png",
                  "command": "ShowSearchOptions"
                },
                {
                  "text": "@language-menu-zoom-to-all",
                  "description": "@language-menu-zoom-to-all-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-extent-24.png",
                  "hideOnDisable": true,
                  "command": "ZoomToFeatureSetCollection",
                  "commandParameter": "{{context}}"
                }
              ],
              "id": "FeatureSetCollectionResultsActions",
              "description": "@language-menu-grouped-results-list-actions",
              "defaultIconUri": "Resources/Images/Icons/check-24.png"
            },
            {
              "items": [
                {
                  "hideOnDisable": true,
                  "commandParameter": "{{context}}",
                  "description": "@language-results-toggle-list-view-desc",
                  "text": "@language-results-toggle-list-view",
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-list-24.png",
                  "command": "SwitchToListResultsView",
                  "libraryId": "Mapping.Infrastructure"
                },
                {
                  "text": "@language-menu-zoom-to-all",
                  "description": "@language-menu-zoom-to-all-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-extent-24.png",
                  "command": "ZoomToFeatureSetCollection",
                  "commandParameter": "{{context}}"
                },
                {
                  "hideOnDisable": true,
                  "commandParameter": "{{context}}",
                  "description": "@language-menu-identify-buffered-feature-set-collection-desc",
                  "text": "@language-menu-identify-buffered-feature-set-collection",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
                  "command": "IdentifyBufferedFeatureSetCollection"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-show-charting-view",
                  "iconUri": "Resources/Images/Icons/Toolbar/charting-24.png",
                  "command": "ShowChartingView",
                  "description": "@language-menu-show-charting-view-desc"
                },
                {
                  "hideOnDisable": true,
                  "commandParameter": {
                    "fsc": "{{context}}",
                    "format": "csv"
                  },
                  "description": "@language-menu-export-results-to-csv-desc",
                  "text": "@language-menu-export-results-to-csv",
                  "iconUri": "Resources/Images/Icons/Toolbar/csv-export-24.png",
                  "command": "ExportResultsTo"
                },
                {
                  "hideOnDisable": true,
                  "commandParameter": {
                    "fsc": "{{context}}",
                    "format": "xlsx"
                  },
                  "description": "@language-menu-export-results-to-xlsx-desc",
                  "text": "@language-menu-export-results-to-xlsx",
                  "iconUri": "Resources/Images/Icons/Toolbar/xlsx-export-24.png",
                  "command": "ExportResultsTo"
                },
                {
                  "hideOnDisable": true,
                  "commandParameter": {
                    "fsc": "{{context}}",
                    "format": "shp"
                  },
                  "description": "@language-menu-export-results-to-shp-desc",
                  "text": "@language-menu-export-results-to-shp",
                  "iconUri": "Resources/Images/Icons/Toolbar/shapefile-export-24.png",
                  "command": "ExportResultsTo"
                },
                {
                  "hideOnDisable": true,
                  "commandParameter": "{{context}}",
                  "description": "@language-menu-run-report-desc",
                  "text": "@language-menu-run-report",
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "command": "ListReports"
                },
                {
                  "hideOnDisable": false,
                  "text": "@language-menu-browse-saved-results",
                  "iconUri": "Resources/Images/Icons/Toolbar/open-24.png",
                  "command": "ListSelections",
                  "description": "@language-menu-browse-saved-results-desc"
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": "{{context}}",
                  "description": "@language-menu-save-results-desc",
                  "text": "@language-menu-save-results",
                  "iconUri": "Resources/Images/Icons/Toolbar/save-24.png",
                  "command": "ShowSaveSelectionDialog"
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": "{{context}}",
                  "description": "@language-menu-combine-results-desc",
                  "text": "@language-menu-combine-results",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-results-24.png",
                  "command": "ShowSearchOptions"
                }
              ],
              "id": "ResultsTableActions",
              "description": "@language-menu-results-table-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png"
            },
            {
              "defaultIconUri": "Resources/Images/Icons/Toolbar/coordinates-add-24.png",
              "items": [
                {
                  "hideOnDisable": true,
                  "text": "@language-plotcoordinates-show-coordinate",
                  "iconUri": "Resources/Images/Icons/Toolbar/check-24.png",
                  "command": "ShowCoordinates",
                  "description": "@language-plotcoordinates-show-coordinate-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-plotcoordinates-hide-coordinate",
                  "iconUri": "Resources/Images/Icons/Toolbar/clear-24.png",
                  "command": "HideCoordinates",
                  "description": "@language-plotcoordinates-hide-coordinate-desc"
                },
                {
                  "hideOnDisable": false,
                  "text": "@language-plotcoordinates-edit-coordinate",
                  "iconUri": "Resources/Images/Icons/Toolbar/data-edit-24.png",
                  "command": "EditCoordinate",
                  "description": "@language-plotcoordinates-edit-coordinate-desc"
                },
                {
                  "hideOnDisable": false,
                  "text": "@language-plotcoordinates-delete-coordinate",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "command": "DeleteCoordinates",
                  "description": "@language-plotcoordinates-delete-coordinate-desc"
                }
              ],
              "id": "CoordinateActions",
              "description": "@language-plotcoordinates-actions-desc"
            },
            {
              "defaultIconUri": "Resources/Images/Icons/Toolbar/coordinates-add-24.png",
              "items": [
                {
                  "hideOnDisable": true,
                  "text": "@language-plotcoordinates-show-all-coordinates",
                  "iconUri": "Resources/Images/Icons/Toolbar/coordinates-show-24.png",
                  "command": "ShowAllCoordinates",
                  "description": "@language-plotcoordinates-show-all-coordinates-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-plotcoordinates-hide-all-coordinates",
                  "iconUri": "Resources/Images/Icons/Toolbar/coordinates-hide-24.png",
                  "command": "HideAllCoordinates",
                  "description": "@language-plotcoordinates-hide-all-coordinates-desc"
                },
                {
                  "hideOnDisable": false,
                  "text": "@language-plotcoordinates-delete-all-coordinates",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "command": "DeleteAllCoordinates",
                  "description": "@language-plotcoordinates-delete-all-coordinates-desc"
                }
              ],
              "id": "CoordinatesListActions",
              "description": "@language-plotcoordinates-list-actions-desc"
            },
            {
              "items": [
                {
                  "hideOnDisable": true,
                  "text": "@language-common-share",
                  "iconUri": "Resources/Images/Icons/Toolbar/share-24.png",
                  "command": "ShowShareProject",
                  "description": "@language-menu-project-share-project-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-project-actions-edit",
                  "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
                  "command": "ShowProjectEditor",
                  "description": "@language-menu-project-edit-project-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-common-delete",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "command": "DeleteProject",
                  "description": "@language-menu-project-delete-project-desc"
                }
              ],
              "id": "ProjectActions",
              "description": "@language-menu-project-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png"
            },
            {
              "items": [
                {
                  "text": "@language-common-refresh",
                  "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
                  "command": "RefreshProjectsList",
                  "description": "@language-menu-projects-actions-refresh-desc"
                }
              ],
              "id": "ProjectsActions",
              "description": "@language-menu-projects-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png"
            },
            {
              "defaultIconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
              "items": [
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-remove-user-added-mapservice",
                  "iconUri": "Resources/Images/Icons/Toolbar/layer-remove-24.png",
                  "description": "@language-menu-remove-user-added-mapservice-desc",
                  "batch": [
                    {
                      "commandParameter": "{{context}}",
                      "command": "RemoveMapService"
                    },
                    {
                      "command": "HideMapServiceActions"
                    }
                  ]
                }
              ],
              "id": "MapServiceActions",
              "description": "@language-mapservice-actions-desc"
            },
            {
              "id": "EventActions",
              "description": "@language-collaboration-event-menu-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "text": "@language-collaboration-erase",
                  "description": "@language-collaboration-erase-desc",
                  "iconUri": "Resources/Images/Icons/trashcan-24.png",
                  "command": "EraseMarkupEvent",
                  "commandParameter": "{{event}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-collaboration-copy-event",
                  "description": "@language-collaboration-copy-event-desc",
                  "iconUri": "Resources/Images/Icons/copy-24.png",
                  "command": "ShowCopyDialogForEvent",
                  "commandParameter": "{{event}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-collaboration-edit-event-message",
                  "description": "@language-collaboration-edit-event-message-desc",
                  "iconUri": "Resources/Images/Icons/edit-24.png",
                  "command": "ShowEditCollaborationMessageView",
                  "commandParameter": "{{event}}",
                  "hideOnDisable": true
                }
              ]
            },
            {
              "id": "FeatureSetCollectionResultsFeatureSetActions",
              "description": "@language-menu-filter-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "text": "@language-menu-zoom-to-all",
                  "description": "@language-menu-zoom-to-all-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-extent-24.png",
                  "hideOnDisable": true,
                  "command": "ZoomToFeatures",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-feature-editing-union-text",
                  "description": "@language-feature-editing-union-desc",
                  "iconUri": "Resources/Images/Icons/polygon-add-24.png",
                  "hideOnDisable": true,
                  "command": "UnionFeaturesInteractive",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-menu-identify-buffered-feature-set-collection",
                  "description": "@language-menu-identify-buffered-feature-set-collection-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
                  "hideOnDisable": true,
                  "command": "IdentifyBufferedFeatureSet",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-menu-show-charting-view",
                  "description": "@language-menu-show-charting-view-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/charting-24.png",
                  "hideOnDisable": true,
                  "command": "ShowChartingView"
                },
                {
                  "text": "@language-menu-export-results-to-csv",
                  "description": "@language-menu-export-results-to-csv-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/csv-export-24.png",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "csv",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-export-results-to-xlsx",
                  "description": "@language-menu-export-results-to-xlsx-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/xlsx-export-24.png",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "xlsx",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-export-results-to-shp",
                  "description": "@language-menu-export-results-to-shp-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/shapefile-export-24.png",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "shp",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-browse-saved-results",
                  "description": "@language-menu-browse-saved-results-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/open-24.png",
                  "command": "ListSelections",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-menu-save-results",
                  "description": "@language-menu-save-results-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/save-24.png",
                  "command": "ShowSaveSelectionDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-menu-combine-results",
                  "description": "@language-menu-combine-results-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-results-24.png",
                  "command": "ShowSearchOptions",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-menu-results-remove-feature-set",
                  "description": "@language-menu-results-remove-feature-set-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "hideOnDisable": true,
                  "command": "RemoveFeatureSetFromResults",
                  "commandParameter": "{{context}}"
                }
              ]
            },
            {
              "id": "FeatureSetResultsActions",
              "description": "@language-menu-feature-set-results-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "libraryId": "Mapping.Infrastructure",
              "items": [
                {
                  "text": "@language-results-toggle-table-view",
                  "description": "@language-results-toggle-table-view-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-table-24.png",
                  "libraryId": "Mapping.Infrastructure",
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "SwitchToTabularResultsView",
                      "abortBatchOnFailure": true
                    },
                    {
                      "command": "CloseDataFrame"
                    }
                  ]
                },
                {
                  "text": "@language-menu-zoom-to-all",
                  "description": "@language-menu-zoom-to-all-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-extent-24.png",
                  "hideOnDisable": true,
                  "command": "ZoomToFeatures",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-feature-editing-union-text",
                  "description": "@language-feature-editing-union-desc",
                  "iconUri": "Resources/Images/Icons/polygon-add-24.png",
                  "hideOnDisable": true,
                  "command": "UnionFeaturesInteractive",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-menu-identify-buffered-feature-set-collection",
                  "description": "@language-menu-identify-buffered-feature-set-collection-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
                  "hideOnDisable": true,
                  "command": "IdentifyBufferedFeatureSet",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-menu-show-charting-view",
                  "description": "@language-menu-show-charting-view-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/charting-24.png",
                  "hideOnDisable": true,
                  "command": "ShowChartingView"
                },
                {
                  "text": "@language-menu-export-results-to-csv",
                  "description": "@language-menu-export-results-to-csv-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/csv-export-24.png",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "csv",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-export-results-to-xlsx",
                  "description": "@language-menu-export-results-to-xlsx-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/xlsx-export-24.png",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "xlsx",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-export-results-to-shp",
                  "description": "@language-menu-export-results-to-shp-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/shapefile-export-24.png",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "shp",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-browse-saved-results",
                  "description": "@language-menu-browse-saved-results-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/open-24.png",
                  "command": "ListSelections",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-menu-save-results",
                  "description": "@language-menu-save-results-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/save-24.png",
                  "command": "ShowSaveSelectionDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-menu-combine-results",
                  "description": "@language-menu-combine-results-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-results-24.png",
                  "command": "ShowSearchOptions",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-menu-results-remove-feature-set",
                  "description": "@language-menu-results-remove-feature-set-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "HideFeatureSetResultsView"
                    },
                    {
                      "command": "RemoveFeatureSetFromResults",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    }
                  ]
                }
              ]
            },
            {
              "id": "FeatureSetResultsFeatureActions",
              "description": "@language-feature-actions-description",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "text": "@language-menu-buffer-identify-feature",
                  "description": "@language-menu-buffer-identify-feature-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "command": "IdentifyBufferedFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-feature-editing-edit",
                  "description": "@language-feature-editing-edit-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/feature-edit-24.png",
                  "command": "StartEditingAttributesAndGeometryFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-feature-editing-cut-text",
                  "description": "@language-feature-editing-cut-desc",
                  "iconUri": "Resources/Images/Icons/polygon-cut-24.png",
                  "hideOnDisable": true,
                  "command": "CutFeatureInteractive",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-native-attach-file",
                  "description": "@language-native-file-from-browser",
                  "iconUri": "Resources/Images/Icons/Toolbar/attach-file-photo-24.png",
                  "command": "AttachFileToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom",
                  "description": "@language-menu-zoom-description",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-feature-24.png",
                  "command": "ZoomToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-common-pan",
                  "description": "@language-common-pan-description",
                  "iconUri": "Resources/Images/Icons/Toolbar/pan-24.png",
                  "command": "PanToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-results-add-feature",
                  "description": "@language-menu-results-add-feature-desc",
                  "iconUri": "Resources/Images/Icons/add-24.png",
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "HideFeatureDetails"
                    },
                    {
                      "command": "AddFeatureToResults",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    }
                  ]
                },
                {
                  "text": "@language-menu-results-remove-feature",
                  "description": "@language-menu-results-remove-feature-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "HideFeatureDetails"
                    },
                    {
                      "command": "RemoveFeatureFromResults",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    }
                  ]
                },
                {
                  "text": "@language-menu-copy-to-drawings",
                  "description": "@language-menu-copy-to-drawings-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/add-to-draw-layer-24.png",
                  "command": "AddMarkupFeature",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                }
              ]
            },
            {
              "id": "FilterActions",
              "description": "@language-menu-filter-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
                  "text": "@language-menu-edit-filter",
                  "id": "OPENFILTER",
                  "description": "@language-menu-edit-filter-desc",
                  "command": "DisplayFilter",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
                  "text": "@language-menu-run-saved-filter",
                  "id": "RUNFILTER",
                  "description": "@language-menu-run-saved-filter-desc",
                  "command": "RunFilter",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
                  "text": "@language-menu-rename-filter",
                  "id": "RENAMEFILTER",
                  "description": "@language-menu-rename-filter-desc",
                  "command": "RenameSavedFilter",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-common-delete",
                  "description": "@language-menu-query-delete-filter-desc",
                  "id": "DELETEFILTER",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "command": "RemoveSavedFilter",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                }
              ]
            },
            {
              "id": "FilterBuilderActions",
              "description": "@language-menu-filter-builder-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/open-24.png",
                  "text": "@language-menu-browse-saved-filters",
                  "description": "@language-menu-browse-saved-filters-desc",
                  "command": "ListFilters",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/save-24.png",
                  "text": "@language-menu-save-filter",
                  "description": "@language-menu-save-filter-desc",
                  "command": "ShowSaveFilterDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/save-as-24.png",
                  "text": "@language-menu-save-as-filter",
                  "description": "@language-menu-save-as-filter-desc",
                  "command": "ShowSaveAsFilterDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                }
              ]
            },
            {
              "id": "QueryActions",
              "description": "@language-menu-query-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
                  "text": "@language-menu-edit-query",
                  "id": "OPENQUERY",
                  "description": "@language-menu-edit-query-desc",
                  "command": "DisplayQuery",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
                  "text": "@language-menu-run-saved-query",
                  "id": "RUNQUERY",
                  "description": "@language-menu-run-saved-query-desc",
                  "command": "RunQuery",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
                  "id": "RENAMEQUERY",
                  "text": "@language-menu-rename-query",
                  "description": "@language-menu-rename-query-desc",
                  "command": "RenameSavedQuery",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-common-delete",
                  "description": "@language-menu-query-delete-query-desc",
                  "id": "DELETEQUERY",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "command": "RemoveSavedQuery",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                }
              ]
            },
            {
              "id": "QueryBuilderActions",
              "description": "@language-menu-query-builder-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/open-24.png",
                  "text": "@language-menu-browse-saved-queries",
                  "description": "@language-menu-browse-saved-queries-desc",
                  "command": "ListQueries",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/save-24.png",
                  "text": "@language-menu-save-query",
                  "description": "@language-menu-save-query-desc",
                  "command": "ShowSaveQueryDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/save-as-24.png",
                  "text": "@language-menu-save-as-query",
                  "description": "@language-menu-save-as-query-desc",
                  "command": "ShowSaveAsQueryDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                }
              ]
            }
          ]
        }
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityViewModel",
            "id": "AccessibilityViewModel"
          },
          {
            "configuration": {
              "included": true,
              "content": "%3Cp%3E%0AThis%20application%20provides%20enhanced%20access%20to%20end-users%20with%20disabilities%3A%20it%20enables%20full%20keyboard%20control%2C%20is%20screen%20reader%20friendly%2C%20and%20contains%20other%20features%20to%20make%20mapping%20technology%20more%20accessible%20to%20the%20largest%20possible%20audience%20of%20potential%20users%2C%20regardless%20of%20their%20level%20of%20ability.%20%3Cbr%3E%3Cbr%3E%20Geocortex%20Viewer%20for%20HTML5%20conforms%20to%20%3Cstrong%3E%3Ca%20href%3D%22http%3A%2F%2Fwww.w3.org%2FTR%2FWCAG20%2F%22%20target%3D%22_blank%22%3EWCAG%202.0%3C%2Fa%3E%3C%2Fstrong%3E%20level%20AA%20(international%20%26amp%3B%20United%20States)%2C%20as%20part%20of%20Latitude%20Geographics'%20Geocortex%20Essentials%20technology%20for%20Esri's%20ArcGIS%20platform.%0A%3C%2Fp%3E",
              "title": "@language-accessibility-map-title"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityIconViewModel",
            "id": "AccessibilityIconViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityModule",
        "moduleName": "Accessibility",
        "configuration": {
          "includeProviders": true,
          "keyboardFocusIndicatorEnabled": true,
          "keyboardFocusIndicatorColor": "#550055",
          "providers": [
            {
              "readAttributionInformation": false,
              "isEnabled": true,
              "decimalPrecision": 4,
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.MapTextProvider",
              "id": "MapTextProvider"
            },
            {
              "notifications": {
                "SignInErrorView": "@language-accessibility-map-sign-in-error",
                "BookmarksView": "@language-accessibility-map-bookmarks",
                "IWantToMenuView": "@language-accessibility-map-iwtm",
                "ChartingView": "@language-accessibility-map-charting",
                "PrintingView": "@language-accessibility-map-printing",
                "ResultsTableView": "@language-accessibility-map-results-table",
                "ExternalComponentView": "@language-accessibility-map-external-component",
                "LogView": "@language-accessibility-map-debug-log",
                "CompactToolbarView": "@language-accessibility-map-compact-toolbar",
                "FeatureDetailsExpandedView": "@language-accessibility-map-feature-details-expanded",
                "ShareView": "@language-accessibility-map-share",
                "ServiceLayersFailureView": "@language-accessibility-map-service-layers-failure",
                "ExportMapView": "@language-accessibility-map-export-map",
                "TabbedToolbarView": "@language-accessibility-map-toolbar"
              },
              "isEnabled": true,
              "subviewNotifications": {
                "BufferOptionsView": "@language-accessibility-map-buffer-options",
                "IdentifyLayerSelectorView": "@language-accessibility-map-identifiable-layers",
                "FeatureDetailsCompactView": "@language-accessibility-map-feature-details-compact",
                "EditorView": "@language-accessibility-map-edit-feature",
                "PlaceholderView": "@language-accessibility-map-placeholder",
                "FeatureLayerDetailsView": "@language-accessibility-map-feature-layer-details",
                "FeatureLayerListView": "@language-accessibility-map-feature-layer-list",
                "MultiFeatureSelectorView": "@language-accessibility-map-select-feature-for-editing",
                "AttachFileView": "@language-accessibility-map-attach-file",
                "LegendView": "@language-accessibility-map-legend",
                "InfoView": "@language-accessibility-map-info",
                "CreateOrEditView": "@language-accessibility-map-create-or-edit",
                "TemplatePickerView": "@language-accessibility-map-create-feature",
                "VisualizationView": "@language-accessibility-map-visualization-view",
                "SimpleFilterBuilderView": "@language-accessibility-map-simple-filter",
                "LayerListView": "@language-accessibility-map-layer-list",
                "SnappingLayerSelectorView": "@language-accessibility-map-snappable-layers",
                "WorkflowListView": "@language-accessibility-map-workflows",
                "SimpleQueryBuilderView": "@language-accessibility-map-simple-query",
                "ResultsListView": "@language-accessibility-map-results-list",
                "LayerActionsView": "@language-accessibility-map-layer-actions",
                "FeatureSetResultsView": "@language-accessibility-map-features-list"
              },
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.ViewActivatorProvider",
              "id": "ViewActivatorProvider"
            }
          ],
          "automaticElementFocusing": true,
          "expandedMapKeyboardAccessibility": true
        },
        "views": [
          {
            "markup": "Mapping/modules/Accessibility/AccessibilityView.html",
            "viewModelId": "AccessibilityViewModel",
            "region": "AccessibilityRegion",
            "visible": true,
            "type": "geocortex.framework.ui.ViewBase",
            "id": "AccessibilityView",
            "require": "geocortex/framework/ui/ViewBase"
          },
          {
            "markup": "Mapping/modules/Accessibility/AccessibilityIconView.html",
            "viewModelId": "AccessibilityIconViewModel",
            "region": "ModalWindowRegion",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityIconView",
            "id": "AccessibilityIconView"
          }
        ]
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.alert.AlertModule",
        "moduleName": "Alert",
        "configuration": {
          "alertRegion": "ModalWindowRegion",
          "overrideNativeAlert": true
        }
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.authentication.AuthenticationModule",
        "moduleName": "Authentication",
        "configuration": {
          "region": "ModalWindowRegion"
        }
      },
      {
        "viewModels": [
          {
            "configuration": {
              "subtitleColor": "#959398",
              "rightImage": "",
              "rightImageDescription": "",
              "leftImage": "",
              "applicationSubtitle": "",
              "height": 60,
              "backgroundImage": "{ViewerConfigUri}../../../Resources/Images/Custom/actmapi_bg_lc.png",
              "backgroundColor": "#FFFFFF",
              "applicationTitle": "",
              "titleColor": "#1A72C4",
              "leftImageDescription": "@language-banner-title"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.banner.BannerViewModel",
            "id": "BannerViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.banner.BannerModule",
        "moduleName": "Banner",
        "configuration": {},
        "views": [
          {
            "markup": "Mapping/modules/Banner/BannerView.html",
            "viewModelId": "BannerViewModel",
            "region": "HeaderRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.banner.BannerView",
            "id": "BannerView"
          },
          {
            "markup": "Mapping/modules/Accessibility/AccessibilityButtonView.html",
            "viewModelId": "AccessibilityIconViewModel",
            "region": "BannerContentRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityButtonView",
            "id": "AccessibilityButtonView",
            "require": "Mapping/modules/Accessibility/AccessibilityButtonView"
          },
          {
            "markup": "Mapping/modules/User/UserInfoView.html",
            "viewModelId": "UserInfoViewModel",
            "region": "BannerContentRegion",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserInfoView",
            "id": "UserInfoView",
            "require": "Mapping/modules/User/UserInfoView"
          },
          {
            "markup": "Mapping/modules/User/SignInView.html",
            "viewModelId": "SignInViewModel",
            "region": "BannerContentRegion",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.SignInView",
            "id": "SignInView",
            "require": "Mapping/modules/User/SignInView"
          },
          {
            "markup": "Mapping/modules/Search/SearchView.html",
            "viewModelId": "SearchViewModel",
            "title": "@language-search-title",
            "region": "BannerContentRegion",
            "visible": true,
            "iconUri": "Resources/Images/Icons/Toolbar/search-32.png",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchView",
            "id": "SearchView",
            "require": "Mapping/modules/Search/SearchView"
          },
          {
            "markup": "Mapping/modules/Search/SearchHintsView.html",
            "viewModelId": "SearchViewModel",
            "region": "SearchHintsRegion",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchHintsView",
            "id": "SearchHintsView",
            "require": "Mapping/modules/Search/SearchHintsView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.barcodescanner.BarcodeScannerViewModel",
            "id": "BarcodeScannerViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.barcodescanner.BarcodeScannerModule",
        "moduleName": "BarcodeScanner",
        "configuration": {
          "htmlScannerView": "BarcodeScannerView"
        },
        "views": [
          {
            "markup": "Mapping/modules/BarcodeScanner/BarcodeScannerView.html",
            "viewModelId": "BarcodeScannerViewModel",
            "region": "ApplicationRegion",
            "visible": false,
            "configuration": {
              "jobDecoderWorkerSource": "Resources/Scripts/JobDecoderWorker.min.js",
              "jsqrcodeSource": "Resources/Scripts/jsqrcode.min.js"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.barcodescanner.BarcodeScannerView",
            "id": "BarcodeScannerView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherViewModel",
            "id": "BasemapSwitcherViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapModule",
        "moduleName": "Basemap",
        "configuration": {},
        "views": [
          {
            "markup": "Mapping/modules/Basemap/BasemapView.html",
            "id": "BasemapView",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapView",
            "region": "BottomLeftMapRegion"
          },
          {
            "viewModelId": "BasemapSwitcherViewModel",
            "region": "BasemapRegion",
            "id": "BasemapSwitcherButtonView",
            "visible": true,
            "configuration": {
              "hideIfNoBasemapsAvailable": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherButtonView",
            "markup": "Mapping/modules/Basemap/BasemapSwitcherButtonView.html"
          },
          {
            "viewModelId": "BasemapSwitcherViewModel",
            "region": "BasemapRegion",
            "id": "BasemapSliderView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSliderView",
            "markup": "Mapping/modules/Basemap/BasemapSliderView.html"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "showBookmarksButton": true,
              "bookmarksEnabled": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksViewModel",
            "id": "BookmarksViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksModule",
        "moduleName": "Bookmarks",
        "configuration": {},
        "views": [
          {
            "viewModelId": "BookmarksViewModel",
            "title": "@language-toolbar-bookmark",
            "region": "BookmarksListRegion",
            "id": "BookmarksView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksView",
            "markup": "Mapping/modules/Bookmarks/BookmarksView.html"
          }
        ]
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.browser.BrowserModule",
        "moduleName": "Browser",
        "configuration": {
          "title": "ACTmapi Land Custodianship Map Viewer"
        }
      },
      {
        "viewModels": [
          {
            "configuration": {
              "defaultBufferDistance": 0,
              "defaultBufferUnit": "kilometer",
              "bufferUnits": [
                "feet",
                "yard",
                "meter",
                "kilometer",
                "mile",
                "nauticalmile"
              ],
              "addBufferToMarkupLayerByDefault": false
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.buffer.BufferOptionsViewModel",
            "id": "BufferOptionsViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.buffer.BufferModule",
        "moduleName": "Buffer",
        "configuration": {
          "bufferProjectionWkid": "",
          "behaviors": [
            {
              "commands": [
                "CloseDataFrame"
              ],
              "name": "BufferOptionsDismissedBehavior",
              "event": "BufferOptionsDismissedEvent"
            },
            {
              "commands": [
                "OpenDataFrame"
              ],
              "name": "BufferingErrorBehavior",
              "event": "BufferingErrorEvent"
            }
          ]
        },
        "views": [
          {
            "viewModelId": "BufferOptionsViewModel",
            "title": "@language-buffer-options-view",
            "region": "DataRegion",
            "id": "BufferOptionsView",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
            "configuration": {
              "targetCommands": [
                "Identify",
                "IdentifyBufferedGeometry",
                "IdentifyBufferedFeature",
                "IdentifyBufferedFeatureSetCollection",
                "IdentifyBufferedFeatureSet"
              ]
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.buffer.BufferOptionsView",
            "markup": "Mapping/modules/Buffer/BufferOptionsView.html"
          }
        ]
      },
      {
        "moduleName": "Charting",
        "views": [
          {
            "viewModelId": "ChartingViewModel",
            "configuration": {},
            "region": "BottomPanelRegion",
            "id": "ChartingView",
            "visible": false,
            "libraryId": "Mapping.Charting",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingView",
            "markup": "Mapping.Charting/modules/Charting/ChartingView.html"
          }
        ],
        "configuration": {
          "behaviors": [
            {
              "commands": [
                "ClearChartHighlights",
                "HighlightChartFeatureSet"
              ],
              "name": "ChartPointMouseHoverBeginBehavior",
              "event": "ChartPointMouseHoverBeginEvent"
            },
            {
              "commands": [
                "ClearChartHighlights"
              ],
              "name": "ChartPointMouseHoverEndBehavior",
              "event": "ChartPointMouseHoverEndEvent"
            },
            {
              "commands": [
                "ShowMap",
                "RunChartFeatureActions"
              ],
              "name": "ChartPointMouseDownBehavior",
              "event": "ChartPointMouseDownEvent"
            }
          ],
          "infrastructureLibraryId": "Charting",
          "adapters": [
            {
              "source": "Field",
              "configuration": {},
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.FeatureChartPointAdapter"
            },
            {
              "source": "DataLink",
              "configuration": {},
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.DataLinkChartPointAdapter"
            }
          ]
        },
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingModule",
        "libraryId": "Mapping.Charting",
        "viewModels": [
          {
            "libraryId": "Mapping.Charting",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingViewModel",
            "id": "ChartingViewModel",
            "configuration": {
              "defaultViewIcon": "Resources/Images/Icons/Toolbar/search-24.png",
              "showHostedViews": false,
              "ordering": {},
              "infrastructureLibraryId": "Charting",
              "showBackButtonAsX": true,
              "containerRegionType": "geocortex.framework.ui.DivStackRegionAdapter",
              "showXButton": true,
              "showMaximizeButton": true,
              "chartingEnabled": true,
              "backButtonOnRootView": false,
              "resizeY": true,
              "containerRegionName": "ChartingRegion",
              "headerIsVisible": true,
              "chartConfiguration": {
                "renderAs": "svg",
                "interactiveLegendEnabled": false,
                "pieStartAngle": 180,
                "animationsEnabled": true,
                "gradientsEnabled": false
              },
              "showHeaderForStandaloneViews": false
            }
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.clusterLayers.ClusterLayerViewModel",
            "id": "ClusterLayerViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.clusterLayers.ClusterLayerModule",
        "moduleName": "ClusterLayers",
        "configuration": {
          "hideClusters": "none"
        },
        "views": [
          {
            "viewModelId": "ClusterLayerViewModel",
            "region": "LayerVisualizationRegion",
            "id": "ClusterLayerView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.clusterLayers.ClusterLayerView",
            "markup": "Mapping/modules/ClusterLayers/ClusterLayerView.html",
            "require": "Mapping/modules/ClusterLayers/ClusterLayerView"
          }
        ],
        "require": "Mapping/modules/ClusterLayers/ClusterLayerModule"
      },
      {
        "moduleName": "Collaboration",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CollaborationModule",
        "configuration": {},
        "views": [
          {
            "id": "CollaborationView",
            "viewModelId": "CollaborationViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CollaborationView",
            "markup": "Mapping/modules/Collaboration/Views/Collaboration/CollaborationView.html",
            "require": "Mapping/modules/Collaboration/Views/Collaboration/CollaborationView",
            "region": "CollaborationContainerRegion",
            "title": "@language-collaboration",
            "configuration": {},
            "visible": false
          },
          {
            "id": "CollaborationMarkupStyleSelectorView",
            "markup": "Mapping/modules/Collaboration/Views/Collaboration/CollaborationMarkupStyleSelectorView.html",
            "viewModelId": "CollaborationViewModel",
            "title": "@language-collaboration-symbology-title",
            "region": "CollaborationContainerRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CollaborationMarkupStyleSelectorView",
            "require": "Mapping/modules/Collaboration/Views/Collaboration/CollaborationMarkupStyleSelectorView",
            "visible": false
          },
          {
            "id": "EventCopyView",
            "markup": "Mapping/modules/Collaboration/Events/EventCopyView.html",
            "viewModelId": "CollaborationViewModel",
            "title": "@language-collaboration-copy-event-title",
            "region": "ModalWindowRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.events.EventCopyView",
            "require": "Mapping/modules/Collaboration/Events/EventCopyView",
            "visible": false
          },
          {
            "id": "EventEditView",
            "markup": "Mapping/modules/Collaboration/Events/EventEditView.html",
            "viewModelId": "EventEditViewModel",
            "title": "@language-collaboration-edit-event-message-title",
            "region": "ModalWindowRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.events.EventEditView",
            "require": "Mapping/modules/Collaboration/Events/EventEditView",
            "visible": false
          },
          {
            "id": "AfterActionView",
            "viewModelId": "AfterActionViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.AfterActionView",
            "markup": "Mapping/modules/Collaboration/Views/AfterAction/AfterActionView.html",
            "require": "Mapping/modules/Collaboration/Views/AfterAction/AfterActionView",
            "region": "CollaborationContainerRegion",
            "title": "@language-after-action-title",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "EventEditViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.events.EventEditViewModel",
            "require": "Mapping/modules/Collaboration/Events/EventEditViewModel",
            "configuration": {
              "characterLimit": 1000
            }
          },
          {
            "id": "AfterActionViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.AfterActionViewModel",
            "require": "Mapping/modules/Collaboration/Views/AfterAction/AfterActionViewModel",
            "configuration": {
              "numEventsToFetch": 25,
              "previewViewSize": {
                "height": 50,
                "width": 50
              },
              "thumbnailViewSize": {
                "height": 200,
                "width": 200
              },
              "icons": {
                "photoIcon": {
                  "iconUrl": "Resources/Images/Pushpins/map-marker-image-24.png",
                  "width": 24,
                  "height": 24,
                  "offsetY": 0,
                  "offsetX": 0
                }
              },
              "eventTypes": [
                {
                  "name": "MessageEvent",
                  "widgetId": "MessageEventWidget",
                  "visible": true
                },
                {
                  "name": "ShareMarkupEvent",
                  "widgetId": "ShareMarkupEventWidget",
                  "visible": true
                },
                {
                  "name": "ClearEvent",
                  "widgetId": "CardEventWidget",
                  "visible": true
                },
                {
                  "name": "CardEvent",
                  "widgetId": "CardEventWidget",
                  "visible": false,
                  "default": true
                },
                {
                  "name": "ShareImageEvent",
                  "widgetId": "ShareImageEventWidget",
                  "visible": true
                },
                {
                  "name": "UserLeftEvent",
                  "widgetId": "UserLeftEventWidget",
                  "visible": true
                },
                {
                  "name": "UserJoinedEvent",
                  "widgetId": "UserJoinedEventWidget",
                  "visible": true
                },
                {
                  "name": "DeleteMarkupEvent",
                  "widgetId": "DeleteMarkupEventWidget",
                  "visible": true
                }
              ],
              "eventWidgets": [
                {
                  "id": "MessageEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.MessageEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.MessageEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "ShareMarkupEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ShareMarkupEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ShareMarkupEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping",
                  "configuration": {
                    "icons": {
                      "active": "Resources/Images/Icons/edit-markup-inactive-24.png",
                      "deleted": "Resources/Images/Icons/close-24.png"
                    },
                    "canEdit": true
                  }
                },
                {
                  "id": "CardEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CardEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CardEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "ShareImageEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ImageEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ImageEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping",
                  "configuration": {
                    "canEdit": true
                  }
                },
                {
                  "id": "UserLeftEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserLeftEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserLeftEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/BannerEvent/BannerEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "UserJoinedEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserJoinedEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserJoinedEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/BannerEvent/BannerEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "DeleteMarkupEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.DeleteMarkupEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.DeleteMarkupEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/BannerEvent/BannerEventView.html",
                  "libraryId": "Mapping"
                }
              ],
              "enabled": false,
              "initialRooms": []
            }
          },
          {
            "id": "CollaborationViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CollaborationViewModel",
            "require": "Mapping/modules/Collaboration/Views/Collaboration/CollaborationViewModel",
            "configuration": {
              "characterLimit": 1000,
              "numEventsToFetch": 25,
              "initialRooms": [],
              "previewViewSize": {
                "height": 50,
                "width": 50
              },
              "thumbnailViewSize": {
                "height": 200,
                "width": 200
              },
              "icons": {
                "photoIcon": {
                  "iconUrl": "Resources/Images/Pushpins/map-marker-image-24.png",
                  "width": 24,
                  "height": 24,
                  "offsetY": 0,
                  "offsetX": 0
                },
                "unpostedPhotoIcon": {
                  "iconUrl": "Resources/Images/Pushpins/map-marker-image-24.png",
                  "width": 24,
                  "height": 24,
                  "offsetY": 0,
                  "offsetX": 0
                }
              },
              "tools": [
                {
                  "name": "SetCollaborationImageLocation",
                  "displayName": "@language-toolbar-markup-point",
                  "command": "SetCollaborationImageLocation",
                  "drawMode": "POINT",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                  "statusText": "@language-collaboration-chat-image-manually-locate-status"
                }
              ],
              "markupTools": [
                {
                  "name": "CollaborationPointDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-point",
                  "drawMode": "POINT",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                  "statusText": "@language-collaboration-draw-point"
                },
                {
                  "name": "CollaborationLineDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-polyline",
                  "drawMode": "POLYLINE",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                  "statusText": "@language-collaboration-polyline-line"
                },
                {
                  "name": "CollaborationFreehandDraw",
                  "displayName": "@language-toolbar-markup-freehand",
                  "command": "CollaborationDraw",
                  "drawMode": "FREEHAND_POLYLINE",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                  "statusText": "@language-collaboration-draw-freehand",
                  "default": true
                },
                {
                  "name": "CollaborationCircleDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-circle",
                  "drawMode": "CIRCLE",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                  "statusText": "@language-collaboration-draw-circle"
                },
                {
                  "name": "CollaborationEllipseDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-ellipse",
                  "drawMode": "ELLIPSE",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                  "statusText": "@language-collaboration-draw-ellipse"
                },
                {
                  "name": "CollaborationRectangleDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-rectangle",
                  "drawMode": "RECTANGLE",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                  "statusText": "@language-collaboration-draw-rectangle"
                },
                {
                  "name": "CollaborationPolygonDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-polygon",
                  "drawMode": "POLYGON",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                  "statusText": "@language-collaboration-draw-polygon"
                },
                {
                  "name": "CollaborationFreehandPolygonDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-freehand-polygon",
                  "drawMode": "FREEHAND_POLYGON",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-freehand-24.png",
                  "statusText": "@language-collaboration-draw-freehand-polygon"
                },
                {
                  "name": "CollaborationTextDraw",
                  "command": "CollaborationDrawText",
                  "displayName": "@language-toolbar-markup-text",
                  "drawMode": "POINT",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-text-24.png",
                  "statusText": "@language-collaboration-draw-text"
                }
              ],
              "eventTypes": [
                {
                  "name": "MessageEvent",
                  "widgetId": "MessageEventWidget",
                  "visible": true,
                  "automatic": false
                },
                {
                  "name": "ShareMarkupEvent",
                  "widgetId": "ShareMarkupEventWidget",
                  "visible": true,
                  "automatic": false
                },
                {
                  "name": "ClearEvent",
                  "widgetId": "CardEventWidget",
                  "visible": true,
                  "automatic": false
                },
                {
                  "name": "CardEvent",
                  "widgetId": "CardEventWidget",
                  "visible": false,
                  "default": true,
                  "automatic": false
                },
                {
                  "name": "ShareImageEvent",
                  "widgetId": "ShareImageEventWidget",
                  "visible": true,
                  "automatic": false
                },
                {
                  "name": "UserLeftEvent",
                  "widgetId": "UserLeftEventWidget",
                  "visible": true,
                  "automatic": true
                },
                {
                  "name": "UserJoinedEvent",
                  "widgetId": "UserJoinedEventWidget",
                  "visible": true,
                  "automatic": true
                },
                {
                  "name": "DeleteMarkupEvent",
                  "widgetId": "DeleteMarkupEventWidget",
                  "visible": true,
                  "automatic": false
                }
              ],
              "eventWidgets": [
                {
                  "id": "MessageEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.MessageEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.MessageEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "ShareMarkupEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ShareMarkupEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ShareMarkupEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping",
                  "configuration": {
                    "icons": {
                      "active": "Resources/Images/Icons/edit-markup-inactive-24.png",
                      "deleted": "Resources/Images/Icons/close-24.png"
                    },
                    "canEdit": true
                  }
                },
                {
                  "id": "CardEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CardEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CardEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "ShareImageEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ImageEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ImageEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping",
                  "configuration": {
                    "canEdit": true
                  }
                },
                {
                  "id": "UserLeftEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserLeftEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserLeftEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/BannerEvent/BannerEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "UserJoinedEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserJoinedEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserJoinedEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/BannerEvent/BannerEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "DeleteMarkupEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.DeleteMarkupEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.DeleteMarkupEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/BannerEvent/BannerEventView.html",
                  "libraryId": "Mapping"
                }
              ],
              "enabled": false
            }
          }
        ]
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.CompactToolbarModule",
        "moduleName": "CompactToolbar",
        "views": [
          {
            "markup": "Mapping/modules/Toolbar/CompactToolbar/CompactToolbarView.html",
            "viewModelId": "CompactToolbarViewModel",
            "title": "@language-compact-toolbar-name",
            "region": "TopRightMapRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.CompactToolbarView",
            "id": "CompactToolbarView",
            "require": "Mapping/modules/Toolbar/CompactToolbar/CompactToolbarView"
          },
          {
            "markup": "Mapping/modules/Toolbar/Templates/ToolbarFlyoutDropdownTemplate.html",
            "viewModelId": "CompactToolbarViewModel",
            "title": "@language-toolbar-multi-tool",
            "region": "CompactToolbarFlyoutDropdown",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarFlyoutView",
            "id": "CompactToolbarFlyoutView",
            "require": "Mapping/modules/Toolbar/ToolbarFlyoutView"
          }
        ],
        "configuration": {
          "toolbarGroups": [
            {
              "id": "compactToolbar",
              "type": "toolbarGroup",
              "name": "Compact Toolbar",
              "isDefault": false,
              "items": [
                {
                  "id": "PreviousExtentButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-previous-32.png",
                  "command": "ZoomToPreviousExtent",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "Previous",
                  "tooltip": "@language-toolbar-navigation-previous-extent-tooltip"
                },
                {
                  "id": "FindDataTools",
                  "type": "flyout",
                  "name": "@language-toolbar-group-find-data-tools",
                  "layout": "Large",
                  "items": [
                    {
                      "id": "PointIdentifyTool-Analysis",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
                      "command": "Identify",
                      "drawMode": "POINT",
                      "name": "@language-toolbar-identify-point",
                      "tooltip": "@language-toolbar-identify-point-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-point-desc"
                    },
                    {
                      "id": "FreehandIdentifyTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-freehand-24.png",
                      "command": "Identify",
                      "drawMode": "FREEHAND_POLYLINE",
                      "name": "@language-toolbar-identify-freehand",
                      "tooltip": "@language-toolbar-identify-freehand-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-freehand-desc"
                    },
                    {
                      "id": "PolylineIdentifyTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-polyline-24.png",
                      "command": "Identify",
                      "drawMode": "POLYLINE",
                      "name": "@language-toolbar-identify-polyline",
                      "tooltip": "@language-toolbar-identify-polyline-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-polyline-desc"
                    },
                    {
                      "id": "PolygonIdentifyTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-polygon-24.png",
                      "command": "Identify",
                      "drawMode": "POLYGON",
                      "name": "@language-toolbar-identify-polygon",
                      "tooltip": "@language-toolbar-identify-polygon-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-polygon-desc"
                    },
                    {
                      "id": "RectangleIdentifyTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-rectangle-24.png",
                      "command": "Identify",
                      "drawMode": "RECTANGLE",
                      "name": "@language-toolbar-identify-rectangle",
                      "tooltip": "@language-toolbar-identify-rectangle-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-rectangle-desc"
                    }
                  ]
                },
                {
                  "id": "ShowSimpleQueryBuilderButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/query-24.png",
                  "command": "ActivateView",
                  "commandParameter": "SimpleQueryBuilderView",
                  "hideOnDisable": false,
                  "name": "@language-querybuilder-simple-title",
                  "tooltip": "@language-querybuilder-simple-tooltip"
                },
                {
                  "id": "ShowSimpleFilterBuilderButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/filter-24.png",
                  "command": "ActivateView",
                  "commandParameter": "SimpleFilterBuilderView",
                  "hideOnDisable": false,
                  "name": "@language-querybuilder-simple-filter-title",
                  "tooltip": "@language-querybuilder-simple-filter-tooltip"
                },
                {
                  "id": "DrawingTools",
                  "type": "flyout",
                  "name": "@language-toolbar-markup-drawing-tools",
                  "layout": "Large",
                  "items": [
                    {
                      "id": "PointMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                      "command": "AddMarkup",
                      "drawMode": "POINT",
                      "name": "@language-toolbar-markup-point",
                      "tooltip": "@language-toolbar-markup-point-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-point-desc"
                    },
                    {
                      "id": "TextMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-text-24.png",
                      "command": "AddTextMarkup",
                      "drawMode": "POINT",
                      "name": "@language-toolbar-markup-text",
                      "tooltip": "@language-toolbar-markup-text-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-text-desc"
                    },
                    {
                      "id": "PolylineMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                      "command": "AddMarkup",
                      "drawMode": "POLYLINE",
                      "name": "@language-toolbar-markup-polyline",
                      "tooltip": "@language-toolbar-markup-polyline-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-polyline-desc"
                    },
                    {
                      "id": "FreehandMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                      "command": "AddMarkup",
                      "drawMode": "FREEHAND_POLYLINE",
                      "name": "@language-toolbar-markup-freehand",
                      "tooltip": "@language-toolbar-markup-freehand-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-freehand-desc"
                    },
                    {
                      "id": "FreehandMarkupPolygonTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-freehand-24.png",
                      "command": "AddMarkup",
                      "drawMode": "FREEHAND_POLYGON",
                      "name": "@language-toolbar-markup-freehand-polygon",
                      "tooltip": "@language-toolbar-markup-freehand-polygon-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-freehand-polygon-desc"
                    },
                    {
                      "id": "EllipseMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                      "command": "AddMarkup",
                      "drawMode": "ELLIPSE",
                      "name": "@language-toolbar-markup-ellipse",
                      "tooltip": "@language-toolbar-markup-ellipse-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-ellipse-desc"
                    },
                    {
                      "id": "CircleMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                      "command": "AddMarkup",
                      "drawMode": "CIRCLE",
                      "name": "@language-toolbar-markup-circle",
                      "tooltip": "@language-toolbar-markup-circle-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-circle-desc"
                    },
                    {
                      "id": "PolygonMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                      "command": "AddMarkup",
                      "drawMode": "POLYGON",
                      "name": "@language-toolbar-markup-polygon",
                      "tooltip": "@language-toolbar-markup-polygon-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-polygon-desc"
                    },
                    {
                      "id": "RectangleMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                      "command": "AddMarkup",
                      "drawMode": "RECTANGLE",
                      "name": "@language-toolbar-markup-rectangle",
                      "tooltip": "@language-toolbar-markup-rectangle-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-rectangle-desc"
                    }
                  ]
                },
                {
                  "id": "EditingFlyout",
                  "type": "flyout",
                  "name": "@language-toolbar-group-editing",
                  "layout": "Large",
                  "items": [
                    {
                      "id": "EditMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-edit-24.png",
                      "command": "EditMarkup",
                      "drawMode": "POINT",
                      "name": "@language-toolbar-markup-edit",
                      "tooltip": "@language-toolbar-markup-edit-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-edit-desc"
                    },
                    {
                      "id": "DeleteMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/erase-24.png",
                      "command": "DeleteMarkup",
                      "drawMode": "POINT",
                      "name": "@language-toolbar-markup-delete",
                      "tooltip": "@language-toolbar-markup-delete-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-delete-desc"
                    },
                    {
                      "id": "ClearMarkup",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/clear-24.png",
                      "command": "ClearMarkup",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-markup-clear",
                      "tooltip": "@language-toolbar-markup-clear-tooltip"
                    }
                  ]
                },
                {
                  "id": "AdvancedMeasurementGroup",
                  "type": "flyout",
                  "name": "Measure",
                  "layout": "Large",
                  "items": [
                    {
                      "id": "MeasureLineTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-polyline-24.png",
                      "command": "MeasureDistance",
                      "drawMode": "POLYLINE",
                      "name": "@language-measurement-measure-line-tool-name",
                      "tooltip": "@language-measurement-measure-line-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-line-tool-status"
                    },
                    {
                      "id": "MeasureFreehandLineTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-freehand-24.png",
                      "command": "MeasureDistance",
                      "drawMode": "FREEHAND_POLYLINE",
                      "name": "@language-measurement-measure-freehand-line-tool-name",
                      "tooltip": "@language-measurement-measure-freehand-line-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-freehand-line-tool-status"
                    },
                    {
                      "id": "MeasurePolygonTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-polygon-24.png",
                      "command": "MeasureArea",
                      "drawMode": "POLYGON",
                      "name": "@language-measurement-measure-polygon-tool-name",
                      "tooltip": "@language-measurement-measure-polygon-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-polygon-tool-status"
                    },
                    {
                      "id": "MeasureFreehandPolygonTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-polygon-freehand-24.png",
                      "command": "MeasureArea",
                      "drawMode": "FREEHAND_POLYGON",
                      "name": "@language-measurement-measure-freehand-polygon-tool-name",
                      "tooltip": "@language-measurement-measure-freehand-polygon-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-freehand-polygon-tool-status"
                    },
                    {
                      "id": "MeasureCircleTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-circle-24.png",
                      "command": "MeasureArea",
                      "drawMode": "CIRCLE",
                      "name": "@language-measurement-measure-circle-tool-name",
                      "tooltip": "@language-measurement-measure-circle-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-circle-tool-status"
                    },
                    {
                      "id": "MeasureRectangleTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-rectangle-24.png",
                      "command": "MeasureArea",
                      "drawMode": "RECTANGLE",
                      "name": "@language-measurement-measure-rectangle-tool-name",
                      "tooltip": "@language-measurement-measure-rectangle-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-rectangle-tool-status"
                    }
                  ]
                },
                {
                  "id": "HomeButton",
                  "type": "button",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/Custom/clear-24.png",
                  "command": "ClearMarkup",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "Clear Map",
                  "tooltip": "Clear all map drawings"
                },
                {
                  "id": "ExportMapButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/share-map-24.png",
                  "command": "ShowExportMapDialog",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-tasks-export-map",
                  "tooltip": "@language-toolbar-tasks-export-map-tooltip"
                },
                {
                  "id": "AddCoordsButton",
                  "type": "button",
                  "iconUri": "../Images/add-coords-24.png",
                  "command": "RunWorkflowById",
                  "commandParameter": "AddPointXY",
                  "hideOnDisable": false,
                  "name": "Add Coords",
                  "tooltip": "Add Coordinates"
                },
                {
                  "id": "DisplayCoordsButton",
                  "type": "button",
                  "iconUri": "../Images/display-coords-24.png",
                  "command": "RunWorkflowById",
                  "commandParameter": "DisplayClickedCoordinates",
                  "hideOnDisable": false,
                  "name": "Display Coords",
                  "tooltip": "Display Clicked Coordinates"
                },
                {
                  "id": "ClearDataButton",
                  "type": "button",
                  "iconUri": "../Images/clear-file-add-24.png",
                  "command": "RunWorkflowById",
                  "commandParameter": "ClearData",
                  "hideOnDisable": false,
                  "name": "Clear Data",
                  "tooltip": "Clear Added Map Data"
                },
                {
                  "id": "UploadDataButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/upload-24.png",
                  "command": "UploadData",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-tasks-upload-data",
                  "tooltip": "@language-toolbar-tasks-upload-data-tooltip"
                },
                {
                  "id": "AddLayersButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-add-24.png",
                  "command": "AddMapLayerInteractive",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-tasks-add-layers",
                  "tooltip": "@language-toolbar-tasks-add-layers-tooltip"
                },
                {
                  "id": "ExtractMarkupToShapefileButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/shapefile-export-24.png",
                  "command": "RunWorkflowById",
                  "commandParameter": "ExtractMarkupToShapefile",
                  "hideOnDisable": false,
                  "name": "Extract Markup",
                  "tooltip": "Extract Markup To Shapefile"
                }
              ]
            }
          ],
          "isEnabled": true,
          "transientElements": [
            {
              "items": [
                {
                  "toggleStateName": "SnappingState",
                  "toggleOff": {
                    "command": "DeactivateSnapping",
                    "name": "@language-toolbar-snapping-disable",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "type": "toggleButton",
                  "id": "MeasureSnappingToggle",
                  "toggleOn": {
                    "command": "ActivateSnapping",
                    "name": "@language-toolbar-snapping-enable",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  }
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": null,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "type": "button",
                  "id": "MeasureSelectSnappingLayersButton"
                }
              ],
              "region": "CompactToolbarTransientRegion",
              "widgetId": "CompactToolbarTransientBase",
              "stateName": "MeasureState"
            },
            {
              "region": "CompactToolbarTransientRegion",
              "widgetId": "MeasurementToolTransientToolbar",
              "stateName": "MeasureState"
            },
            {
              "items": [
                {
                  "toggleStateName": "SnappingState",
                  "toggleOff": {
                    "command": "DeactivateSnapping",
                    "name": "@language-toolbar-snapping-disable",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "type": "toggleButton",
                  "id": "MarkupSnappingToggle",
                  "toggleOn": {
                    "command": "ActivateSnapping",
                    "name": "@language-toolbar-snapping-enable",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  }
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": null,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "type": "button",
                  "id": "MarkupSelectSnappingLayersButton"
                },
                {
                  "id": "ChangeMarkupStyle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png",
                  "toggleStateName": "MarkupStyleToggleState",
                  "toggleOn": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "CreateMarkupStyleView"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "CreateMarkupStyleView"
                  }
                }
              ],
              "region": "CompactToolbarTransientRegion",
              "widgetId": "CompactToolbarTransientBase",
              "stateName": "DrawMarkupState"
            },
            {
              "items": [
                {
                  "toggleStateName": "SnappingState",
                  "tooltip": "@language-toolbar-identify-snapping-tooltip",
                  "toggleOff": {
                    "command": "DeactivateSnapping",
                    "name": "@language-toolbar-snapping-disable",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "type": "toggleButton",
                  "id": "EditingSnappingToggle",
                  "toggleOn": {
                    "command": "ActivateSnapping",
                    "name": "@language-toolbar-snapping-enable",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  }
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": null,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "type": "button",
                  "id": "EditingSnappingLayersButton"
                },
                {
                  "id": "ChangeMarkupStyle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png",
                  "toggleStateName": "MarkupStyleToggleState",
                  "toggleOn": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "CreateMarkupStyleView"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "CreateMarkupStyleView"
                  }
                }
              ],
              "region": "CompactToolbarTransientRegion",
              "widgetId": "CompactToolbarTransientBase",
              "stateName": "EditingMarkupState"
            },
            {
              "region": "CompactToolbarTransientRegion",
              "widgetId": "MeasurementToolTransientToolbar",
              "stateName": "EditingMeasurementMarkupState"
            },
            {
              "items": [
                {
                  "toggleStateName": "FindDataBufferingState",
                  "toggleOff": {
                    "commandParameter": "Identify",
                    "command": "DeactivateBufferingAndDismissOptions",
                    "name": "@language-toolbar-buffering-disable",
                    "tooltip": "@language-toolbar-buffering-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "type": "toggleButton",
                  "id": "FindDataBufferingToggle",
                  "toggleOn": {
                    "commandParameter": "Identify",
                    "command": "ActivateBufferingAndDisplayOptions",
                    "name": "@language-toolbar-buffering-enable",
                    "tooltip": "@language-toolbar-buffering-alt-enable"
                  }
                },
                {
                  "toggleStateName": "SnappingState",
                  "tooltip": "@language-toolbar-identify-snapping-tooltip",
                  "toggleOff": {
                    "command": "DeactivateSnapping",
                    "name": "@language-toolbar-snapping-disable",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "type": "toggleButton",
                  "id": "FindDataSnappingToggle",
                  "toggleOn": {
                    "command": "ActivateSnapping",
                    "name": "@language-toolbar-snapping-enable",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  }
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": null,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "type": "button",
                  "id": "FindDataSelectSnappingLayersButton"
                },
                {
                  "name": "@language-toolbar-identify-layers-change",
                  "tooltip": "@language-toolbar-identify-layers-change-tooltip",
                  "command": "ActivateSelectLayersForIdentify",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png",
                  "type": "button",
                  "id": "ChangeIdentifiableLayers"
                }
              ],
              "region": "CompactToolbarTransientRegion",
              "widgetId": "CompactToolbarTransientBase",
              "stateName": "FindDataState"
            },
            {
              "items": [
                {
                  "commandParameter": {
                    "toolFriendly": true
                  },
                  "name": "@language-toolbar-editing-create-new-feature-geolocation",
                  "tooltip": "@language-toolbar-editing-create-new-feature-geolocation-tooltip",
                  "command": "Geolocate",
                  "iconUri": "Resources/Images/Icons/Toolbar/geolocate.png",
                  "type": "button",
                  "id": "CreateFeatureWithGeolocation"
                }
              ],
              "region": "CompactToolbarTransientRegion",
              "widgetId": "CompactToolbarTransientBase",
              "stateName": "FeaturePlacementPointGraphicState"
            },
            {
              "items": [
                {
                  "toggleStateName": "SnappingState",
                  "toggleOff": {
                    "command": "DeactivateSnapping",
                    "name": "@language-toolbar-snapping-disable",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "type": "toggleButton",
                  "id": "FeatureEditingSnappingToggle",
                  "toggleOn": {
                    "command": "ActivateSnapping",
                    "name": "@language-toolbar-snapping-enable",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  }
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": null,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "type": "button",
                  "id": "FeatureEditingSnappingLayersButton"
                }
              ],
              "region": "CompactToolbarTransientRegion",
              "widgetId": "CompactToolbarTransientBase",
              "stateName": "FeaturePlacementGraphicState"
            },
            {
              "items": [
                {
                  "toggleStateName": "SnappingState",
                  "toggleOff": {
                    "command": "DeactivateSnapping",
                    "name": "@language-toolbar-snapping-disable",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "type": "toggleButton",
                  "id": "PlotCoordinatesSnappingToggle",
                  "toggleOn": {
                    "command": "ActivateSnapping",
                    "name": "@language-toolbar-snapping-enable",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  }
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": null,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "type": "button",
                  "id": "PlotCoordinatesSnappingLayersButton"
                }
              ],
              "region": "CompactToolbarTransientRegion",
              "widgetId": "CompactToolbarTransientBase",
              "stateName": "PlotCoordinatesState"
            }
          ]
        },
        "viewModels": [
          {
            "configuration": {
              "toolbarGroupRefs": [
                "compactToolbar"
              ],
              "toolbarVisibleTools": 9,
              "toolbarOpenByDefault": false
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.CompactToolbarViewModel",
            "id": "CompactToolbarViewModel",
            "require": "Mapping/modules/Toolbar/CompactToolbar/CompactToolbarViewModel"
          },
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.transients.TransientViewModel",
            "id": "CompactToolbarTransientViewModel",
            "require": "Mapping/modules/Toolbar/Transients/TransientViewModel"
          }
        ],
        "require": "Mapping/modules/Toolbar/CompactToolbarModule"
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.confirm.ConfirmModule",
        "moduleName": "Confirm",
        "configuration": {
          "confirmRegion": "ModalWindowRegion"
        }
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.ContextMenu.ContextMenuViewModel",
            "id": "ContextMenuViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.ContextMenu.ContextMenuModule",
        "moduleName": "ContextMenu",
        "configuration": {},
        "views": [
          {
            "markup": "Mapping/modules/ContextMenu/ContextMenuView.html",
            "viewModelId": "ContextMenuViewModel",
            "description": "@language-common-feature-layer-details-desc",
            "title": "@language-common-feature-layer-details",
            "region": "ContextMenuRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-extract-24.png",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.ContextMenu.ContextMenuView",
            "id": "ContextMenuView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "isEnabled": true,
              "coordinatesModel": "MapCoordinatesModel",
              "openByDefault": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.coordinates.CoordinatesViewModel",
            "id": "CoordinatesViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.coordinates.CoordinatesModule",
        "moduleName": "Coordinates",
        "configuration": {},
        "views": [
          {
            "viewModelId": "CoordinatesViewModel",
            "region": "BottomLeftMapRegion",
            "id": "CoordinatesView",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.coordinates.CoordinatesView",
            "markup": "Mapping/modules/Coordinates/CoordinatesView.html"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.TemplatePickerViewModel",
            "id": "TemplatePickerViewModel",
            "require": "Mapping/modules/Editing/TemplatePicker/TemplatePickerViewModel"
          },
          {
            "configuration": {
              "editGeometry": true,
              "tools": [
                {
                  "name": "EditingPointTool",
                  "isSticky": false,
                  "keyboardStatusText": "@language-feature-editing-dsk-point-tool-keyboard",
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                  "statusText": "@language-feature-editing-dsk-point-tool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POINT"
                },
                {
                  "name": "EditingLineTool",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                  "statusText": "@language-feature-editing-dsk-line-tool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "LINE"
                },
                {
                  "name": "EditingPolylineTool",
                  "isSticky": false,
                  "keyboardStatusText": "@language-feature-editing-dsk-polyline-tool-keyboard",
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                  "statusText": "@language-feature-editing-dsk-polyline-tool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POLYLINE"
                },
                {
                  "name": "EditingFreehandPolylineTool",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                  "statusText": "@language-feature-editing-dsk-freehand-polyline-tool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "FREEHAND_POLYLINE"
                },
                {
                  "name": "EditingPolygonTool",
                  "isSticky": false,
                  "keyboardStatusText": "@language-feature-editing-dsk-polygon-tool-keyboard",
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                  "statusText": "@language-feature-editing-dsk-polygon-tool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POLYGON"
                },
                {
                  "name": "EditingFreehandPolygonTool",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                  "statusText": "@language-feature-editing-dsk-freehand-polygon-tool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "FREEHAND_POLYGON"
                },
                {
                  "name": "EditingCircleTool",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                  "statusText": "@language-feature-editing-circle-tool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "CIRCLE"
                },
                {
                  "name": "EditingEllipseTool",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                  "statusText": "@language-feature-editing-ellipse-tool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "ELLIPSE"
                },
                {
                  "name": "EditingRectangleTool",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                  "statusText": "@language-feature-editing-rectangle-tool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "EXTENT"
                }
              ],
              "validateGeometry": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditorViewModel",
            "id": "EditorViewModel",
            "require": "Mapping/modules/Editing/Editor/EditorViewModel"
          },
          {
            "configuration": {
              "searchRadiusMeters": 100,
              "tools": [
                {
                  "name": "SelectFeaturesForEditingTool",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-rectangle-24.png",
                  "statusText": "@language-feature-editing-dsk-rectangle-tool",
                  "command": "SelectFeatureForEditing",
                  "drawMode": "RECTANGLE"
                }
              ]
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.CreateOrEditViewModel",
            "id": "CreateOrEditViewModel",
            "require": "Mapping/modules/Editing/CreateOrEdit/CreateOrEditViewModel"
          },
          {
            "configuration": {
              "displayResultPickerTemplateComplexity": "complex"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.MultiFeatureSelectorViewModel",
            "id": "MultiFeatureSelectorViewModel",
            "require": "Mapping/modules/Editing/MultiFeatureSelector/MultiFeatureSelectorViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditingModule",
        "moduleName": "Editing",
        "configuration": {
          "behaviors": [
            {
              "commands": [
                "ZoomToFeature"
              ],
              "name": "EditorFeatureSelectedBehavior"
            },
            {
              "commands": [],
              "name": "EditorRemoveFeatureSelectedBehavior"
            }
          ]
        },
        "views": [
          {
            "markup": "Mapping/modules/Editing/TemplatePicker/TemplatePickerView.html",
            "viewModelId": "TemplatePickerViewModel",
            "description": "@language-common-feature-template-picker-desc",
            "title": "@language-common-feature-template-picker",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/file-add-24.png",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.TemplatePickerView",
            "id": "TemplatePickerView",
            "require": "Mapping/modules/Editing/TemplatePicker/TemplatePickerView"
          },
          {
            "markup": "Mapping/modules/Editing/Editor/EditorView.html",
            "viewModelId": "EditorViewModel",
            "description": "@language-common-feature-editing-desc",
            "title": "@language-common-feature-editing",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
            "configuration": {
              "showXButton": false
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditorView",
            "id": "EditorView",
            "require": "Mapping/modules/Editing/Editor/EditorView"
          },
          {
            "markup": "Mapping/modules/Editing/CreateOrEdit/CreateOrEditView.html",
            "viewModelId": "CreateOrEditViewModel",
            "description": "@language-feature-editing-create-edit-description",
            "title": "@language-feature-editing-create-edit",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.CreateOrEditView",
            "id": "CreateOrEditView",
            "require": "Mapping/modules/Editing/CreateOrEdit/CreateOrEditView"
          },
          {
            "markup": "Mapping/infrastructure/ui/components/FeatureSelector/FeatureSelectorView.html",
            "viewModelId": "MultiFeatureSelectorViewModel",
            "description": "@language-feature-editing-multi-feature-selector-description",
            "title": "@language-feature-editing-multi-feature-selector",
            "region": "DataFrameResultsContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.FeatureSelector.FeatureSelectorView",
            "id": "MultiFeatureSelectorView",
            "require": "geocortex/infrastructure/ui/components/FeatureSelector/FeatureSelectorView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.exportMap.ExportMapViewModel",
            "id": "ExportMapViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.exportMap.ExportMapModule",
        "moduleName": "ExportMap",
        "configuration": {},
        "views": [
          {
            "viewModelId": "ExportMapViewModel",
            "title": "@language-export-map-description",
            "region": "ModalWindowRegion",
            "id": "ExportMapView",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/share-map-image-24.png",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.exportMap.ExportMapView",
            "markup": "Mapping/modules/ExportMap/ExportMapView.html"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.exportWebMap.ExportWebMapViewModel",
            "id": "ExportWebMapViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.exportWebMap.ExportWebMapModule",
        "moduleName": "ExportWebMap",
        "configuration": {},
        "views": [
          {
            "viewModelId": "ExportWebMapViewModel",
            "title": "@language-export-web-map-description",
            "region": "ModalWindowRegion",
            "id": "ExportWebMapView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.exportWebMap.ExportWebMapView",
            "markup": "Mapping/modules/ExportWebMap/ExportWebMapView.html"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "regions": [
                {
                  "regionCss": "feature-details-top-left-region",
                  "regionName": "FeatureDetailsTopLeftRegion"
                },
                {
                  "regionCss": "feature-details-top-right-region",
                  "regionName": "FeatureDetailsTopRightRegion"
                },
                {
                  "regionCss": "feature-details-bottom-region",
                  "regionName": "FeatureDetailsBottomRegion"
                }
              ],
              "defaultTabViewForLayer": {
                "FeatureAttributesProviderView": "default"
              }
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsViewModel",
            "id": "FeatureDetailsExpandedViewModel",
            "require": "Mapping/modules/FeatureDetails/FeatureDetailsViewModel"
          },
          {
            "configuration": {
              "regions": [
                {
                  "regionCss": "feature-region",
                  "regionType": "geocortex.framework.ui.DivStackRegionAdapter",
                  "regionName": "FeatureDetailsCompactViewRegion"
                }
              ]
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsViewModel",
            "id": "FeatureDetailsCompactViewModel",
            "require": "Mapping/modules/FeatureDetails/FeatureDetailsViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsModule",
        "moduleName": "FeatureDetails",
        "configuration": {
          "behaviors": [
            {
              "name": "FeatureDetailsOpenedBehavior",
              "commands": [
                "ZoomToFeature",
                "FocusFeature"
              ]
            },
            {
              "name": "FeatureDetailsClosedBehavior",
              "commands": [
                "ClearFeatureFocus"
              ]
            }
          ],
          "viewModes": {
            "compact": {
              "viewId": "FeatureDetailsCompactView",
              "defaultProviderTargetRegion": "FeatureDetailsCompactViewRegion"
            },
            "expanded": {
              "viewId": "FeatureDetailsExpandedView",
              "defaultProviderTargetRegion": "FeatureDetailsBottomRegion"
            }
          },
          "defaultViewMode": "compact",
          "providers": [
            {
              "title": "@language-feature-description",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DescriptionViewModel",
              "viewId": "FeatureDescriptionProviderView",
              "enabled": true,
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DescriptionView",
              "config": {
                "longDescription": true
              },
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DescriptionView.html"
            },
            {
              "title": "@language-feature-hyperlinks",
              "viewId": "FeatureHyperlinksProviderView",
              "iconUri": "Resources/Images/Icons/Toolbar/attach-24.png",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.HyperlinksView",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.HyperlinksViewModel",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/HyperlinksView.html"
            },
            {
              "title": "@language-feature-attributes",
              "viewId": "FeatureAttributesProviderView",
              "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesView",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesViewModel",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/MultiColumnAttributesView.html"
            },
            {
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.charting.SingleFeatureChartView",
              "title": "@language-feature-charts",
              "config": {
                "infrastructureLibraryId": "Charting",
                "chartConfiguration": {
                  "renderAs": "svg",
                  "interactiveLegendEnabled": false,
                  "pieStartAngle": 180,
                  "animationsEnabled": true,
                  "gradientsEnabled": false
                },
                "containerRegionName": "SingleFeatureChartsRegion"
              },
              "viewId": "FeatureChartsProviderView",
              "iconUri": "Resources/Images/Icons/charting-24.png",
              "libraryId": "Mapping.Charting",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.SingleFeatureChartViewModel",
              "markup": "Mapping.Charting/modules/Charting/SingleFeatureChartView.html"
            },
            {
              "title": "@language-feature-attachments",
              "viewId": "FeatureAttachmentsProviderView",
              "iconUri": "Resources/Images/Icons/Toolbar/attach-24.png",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsView",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsViewModel",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttachmentsView.html"
            },
            {
              "title": "@language-feature-related-features",
              "viewId": "FeatureRelationsProviderView",
              "iconUri": "Resources/Images/Icons/Toolbar/file-multi-24.png",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesView",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesViewModel",
              "markup": {
                "compact": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesView.html",
                "expanded": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesTableView.html"
              }
            },
            {
              "title": "@language-feature-related-features",
              "viewId": "SearchTablesFeatureRelationsProviderView",
              "iconUri": "Resources/Images/Icons/Toolbar/file-multi-24.png",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesView",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.SearchTablesRelatedFeaturesViewModel",
              "markup": {
                "compact": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesView.html",
                "expanded": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesTableView.html"
              }
            },
            {
              "title": "@language-feature-datalinks",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DataLinksViewModel",
              "viewId": "FeatureDataLinksProviderView",
              "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DataLinksView",
              "config": {
                "dataLinkDetailsView": "DataFrameResultsContainerRegion"
              },
              "markup": {
                "compact": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DataLinksView.html",
                "expanded": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DataLinksTableView.html"
              }
            }
          ]
        },
        "views": [
          {
            "markup": "Mapping/modules/FeatureDetails/FeatureDetailsView.html",
            "viewModelId": "FeatureDetailsExpandedViewModel",
            "configuration": {
              "onDeactivated": []
            },
            "title": "@language-feature-details-title",
            "region": "ResultsRegion",
            "visible": false,
            "libraryId": "Mapping",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsView",
            "id": "FeatureDetailsExpandedView",
            "require": "Mapping/modules/FeatureDetails/FeatureDetailsView"
          },
          {
            "markup": "Mapping/modules/FeatureDetails/FeatureDetailsView.html",
            "viewModelId": "FeatureDetailsCompactViewModel",
            "configuration": {
              "onDeactivated": []
            },
            "title": "@language-feature-details-title",
            "region": "DataFrameResultsContainerRegion",
            "visible": false,
            "libraryId": "Mapping",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsView",
            "id": "FeatureDetailsCompactView",
            "require": "Mapping/modules/FeatureDetails/FeatureDetailsView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "backgroundColor": "#EEEEEE",
              "height": 0
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.footer.FooterViewModel",
            "id": "FooterViewModel"
          },
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuViewModel",
            "id": "FooterMenuViewModel",
            "require": "geocortex/infrastructure/menus/MenuViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.footer.FooterModule",
        "moduleName": "Footer",
        "configuration": {
          "menus": [
            {
              "items": [
                {
                  "text": "@language-menu-latitude-geographics",
                  "commandParameter": "http://www.latitudegeo.com/",
                  "command": "OpenWebPage",
                  "description": "@language-menu-latitude-geographics-desc"
                },
                {
                  "text": "@language-menu-powered-by-geocortex",
                  "commandParameter": "http://www.geocortex.com/",
                  "command": "OpenWebPage",
                  "description": "@language-menu-powered-by-geocortex-desc"
                }
              ],
              "id": "FooterMenu",
              "description": "@language-menu-footer-menu-desc"
            }
          ]
        },
        "views": [
          {
            "markup": "Mapping/modules/Footer/FooterView.html",
            "viewModelId": "FooterViewModel",
            "region": "FooterRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.footer.FooterView",
            "id": "FooterView"
          },
          {
            "viewModelId": "FooterMenuViewModel",
            "configuration": {
              "menuId": "FooterMenu"
            },
            "region": "RightFooterRegion",
            "id": "FooterMenuView",
            "visible": true,
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuView",
            "markup": "Mapping/infrastructure/menus/MenuHyperlinkView.html",
            "require": "geocortex/infrastructure/menus/MenuView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "geolocateExtentZoomLevel": 50000,
              "geolocateAccuracyCircleEnabled": true,
              "trackingEnabled": false,
              "geolocateEnabled": false,
              "singleGeolocationProfiles": {
                "default": {
                  "accuracyThreshold": 10,
                  "timeLimit": 30000
                },
                "fine": {
                  "accuracyThreshold": 3,
                  "timeLimit": 60000
                },
                "coarse": {
                  "accuracyThreshold": 250,
                  "timeLimit": 10000
                }
              },
              "followingEnabled": false,
              "enableHighAccuracy": true,
              "adjustExtentZoomOnGeolocate": true,
              "geolocationIndicator": "Resources/Images/Icons/geolocate-position-32.png"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateViewModel",
            "id": "GeolocateViewModel"
          },
          {
            "configuration": {
              "coordinateFormat": "dd",
              "showTrackingCoordinates": true,
              "coordinateFractionalDigits": 4,
              "showGeolocateCoordinates": false,
              "showFollowingCoordinates": true,
              "busyIcon": "Resources/Images/loader-small.gif",
              "coordinateWkid": null,
              "geolocateIcon": "Resources/Images/Icons/geolocate-24.png"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateStatusViewModel",
            "id": "GeolocateStatusViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateModule",
        "moduleName": "Geolocate",
        "configuration": {},
        "views": [
          {
            "viewModelId": "GeolocateViewModel",
            "title": "@language-geolocate-title",
            "region": "GeolocateMenuRegion",
            "id": "GeolocateView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateView",
            "markup": "Mapping/modules/Geolocate/GeolocateView.html"
          },
          {
            "viewModelId": "GeolocateStatusViewModel",
            "region": "BottomCenterMapRegion",
            "id": "GeolocateStatusView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateStatusView",
            "markup": "Mapping/modules/Geolocate/GeolocateStatusView.html"
          }
        ]
      },
      {
        "viewModels": [
          {
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.GlobalMenu.GlobalMenuViewModel",
            "id": "GlobalMenuViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.GlobalMenu.GlobalMenuModule",
        "moduleName": "GlobalMenu",
        "configuration": {
          "menus": [
            {
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "hideOnDisable": true,
                  "text": "@language-user-sign-in",
                  "iconUri": "Resources/Images/Icons/user-24.png",
                  "command": "SignIn",
                  "description": "@language-user-sign-in-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-user-sign-out",
                  "iconUri": "Resources/Images/Icons/user-24.png",
                  "command": "SignOut",
                  "description": "@language-user-sign-out-desc"
                },
                {
                  "text": "@language-menu-global-open",
                  "iconUri": "Resources/Images/Icons/open-24.png",
                  "command": "ShowProjects",
                  "description": "@language-menu-global-open-desc"
                },
                {
                  "text": "@language-menu-global-save",
                  "iconUri": "Resources/Images/Icons/save-24.png",
                  "command": "SaveProject",
                  "description": "@language-menu-global-save-desc"
                },
                {
                  "text": "@language-menu-global-save-as",
                  "iconUri": "Resources/Images/Icons/save-as-24.png",
                  "command": "SaveAsProject",
                  "description": "@language-menu-global-save-as-desc"
                }
              ],
              "id": "GlobalMenuConfig",
              "description": "@language-menu-menus-description"
            }
          ]
        },
        "views": [
          {
            "markup": "Mapping/modules/GlobalMenu/GlobalMenuView.html",
            "viewModelId": "GlobalMenuViewModel",
            "region": "GlobalMenuRegion",
            "visible": true,
            "configuration": {
              "menuId": "GlobalMenuConfig"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.GlobalMenu.GlobalMenuView",
            "id": "GlobalMenuView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.heatMaps.HeatMapsViewModel",
            "id": "HeatMapsViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.heatMaps.HeatMapsModule",
        "moduleName": "HeatMaps",
        "configuration": {
          "intensity": 30,
          "gradientOptions": {
            "innermostColor": "#FFFFFF00",
            "outermostColor": "#00FFFFFF",
            "outerColor": "#FF0000FF",
            "innerColor": "#FFFF0000"
          }
        },
        "views": [
          {
            "viewModelId": "HeatMapsViewModel",
            "region": "LayerVisualizationRegion",
            "id": "HeatMapsView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.heatMaps.HeatMapsView",
            "markup": "Mapping/modules/HeatMaps/HeatMapsView.html"
          }
        ]
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Highlight.HighlightModule",
        "moduleName": "Highlight",
        "configuration": {
          "borderColor": "RGBA(255,255,151,1)",
          "fillColor": "RGBA(236,236,58,0.1)",
          "borderWidth": 2,
          "outerBorderColor": "RGBA(200,200,0,1)",
          "focusedFillColor": "RGBA(0,255,255,0.2)",
          "focusedBorderColor": "RGBA(0,255,255,1)",
          "focusedOuterBorderColor": "RGBA(87,170,255,1)",
          "outerBorderWidth": 5,
          "highlightLineOpacity": 0.5,
          "maxHighlightableGeometryVertices": 5000,
          "geometryGeneralization": {
            "geometryGeneralizationEnabled": true,
            "thresholdVertices": 5000,
            "maxDeviationInMeters": 250
          }
        }
      },
      {
        "viewModels": [
          {
            "configuration": {
              "bufferIconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
              "selectLayersIconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyOptionsViewModel",
            "id": "IdentifyOptionsViewModel"
          },
          {
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyLayerSelectorViewModel",
            "id": "IdentifyLayerSelectorViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyModule",
        "moduleName": "Identify",
        "configuration": {
          "behaviors": [
            {
              "commands": [
                "OpenDataFrame"
              ],
              "name": "SelectLayersForIdentifyActivatedBehavior",
              "event": "SelectLayersForIdentifyActivatedEvent"
            },
            {
              "commands": [
                "CloseDataFrame"
              ],
              "name": "SelectLayersForIdentifyDeactivatedBehavior",
              "event": "SelectLayersForIdentifyDeactivatedEvent"
            }
          ],
          "identifyProviders": [
            {
              "enabled": true,
              "configuration": {},
              "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.MapIdentifyTaskIdentifyProvider"
            },
            {
              "enabled": true,
              "configuration": {},
              "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.RasterIdentifyTaskIdentifyProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.GraphicsLayerIdentifyProvider",
              "enabled": true,
              "configuration": {}
            }
          ],
          "topMostLayerOnly": false,
          "layersInVisibleScaleRangeOnly": true,
          "visibleLayersOnly": true,
          "returnGeometry": true,
          "pixelTolerance": 5,
          "polygonPixelTolerance": 0,
          "resultsDisplayName": "@language-identify-results-header",
          "tools": [
            {
              "name": "IdentifyPointTool",
              "isSticky": false,
              "keyboardStatusText": "@language-toolbar-identify-point-desc-keyboard",
              "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
              "statusText": "@language-dsk-identify-point-tool",
              "command": "Identify",
              "drawMode": "POINT"
            },
            {
              "name": "IdentifyRectangleTool",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-rectangle-24.png",
              "statusText": "@language-identify-rectangle-tool",
              "command": "Identify",
              "drawMode": "RECTANGLE"
            },
            {
              "name": "IdentifyPolylineTool",
              "isSticky": false,
              "keyboardStatusText": "@language-toolbar-identify-polyline-desc-keyboard",
              "iconUri": "Resources/Images/Icons/Toolbar/identify-polyline-24.png",
              "statusText": "@language-dsk-identify-polyline-tool",
              "command": "Identify",
              "drawMode": "POLYLINE"
            },
            {
              "name": "IdentifyPolygonTool",
              "isSticky": false,
              "keyboardStatusText": "@language-toolbar-identify-polygon-desc-keyboard",
              "iconUri": "Resources/Images/Icons/Toolbar/identify-polygon-24.png",
              "statusText": "@language-identify-polygon-tool",
              "command": "Identify",
              "drawMode": "POLYGON"
            },
            {
              "name": "IdentifyFreehandPolygonTool",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-freehand-24.png",
              "statusText": "@language-identify-freehand-polygon-tool",
              "command": "Identify",
              "drawMode": "FREEHAND_POLYGON"
            }
          ],
          "restrictRasterIdentifyToPoint": true
        },
        "views": [
          {
            "markup": "Mapping/modules/Identify/IdentifyOptionsView.html",
            "viewModelId": "IdentifyOptionsViewModel",
            "region": "IdentifyOptionsRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyOptionsView",
            "id": "IdentifyOptionsView"
          },
          {
            "viewModelId": "IdentifyLayerSelectorViewModel",
            "title": "@language-layer-selector-identify-title",
            "markup": "Mapping/modules/LayerSelector/LayerSelectorView.html",
            "visible": false,
            "isManaged": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png",
            "region": "DataRegion",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyLayerSelectorView",
            "id": "IdentifyLayerSelectorView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "content": "%3Cdiv%20style%3D%22text-align%3A%20center%3B%20font-size%3A%2013.33px%3B%22%3E%3Cspan%20style%3D%22font-size%3A%20large%3B%20font-style%3A%20italic%3B%20font-weight%3A%20bold%3B%20text-decoration%3A%20underline%3B%22%3ELand%20Custodianship%20Map%3C%2Fspan%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22font-size%3A%2010pt%3B%22%3E%3Cbr%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22font-size%3A%2010pt%3B%22%3E%3Cbr%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22font-size%3A%2010pt%3B%22%3E%3Cfont%20face%3D%22Arial%2C%20Verdana%22%20size%3D%222%22%3EThis%20map%20contains%20basic%20cadastral%20data.%20%26nbsp%3BA%20list%20of%20the%20available%20data%20from%20this%20map%20viewer%2C%20and%20a%20description%20of%20%26nbsp%3B%3C%2Ffont%3E%3Cspan%20style%3D%22font-size%3A%20small%3B%22%3Ethem%2C%20are%20available%20below.%20%26nbsp%3BData%20is%20updated%20nightly.%3C%2Fspan%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22font-size%3A%2010pt%3B%22%3E%3Cspan%20style%3D%22font-size%3A%20small%3B%22%3E%3Cbr%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22font-size%3A%2010pt%3B%22%3E%3Cspan%20style%3D%22font-size%3A%20small%3B%22%3EThis%20map%20also%20contains%20leased%20and%20unleased%20land%2C%20displayed%20by%20the%20custodian%20of%20that%20land%20parcel%20and%20licencing%20data.%20Users%20are%20able%20to%20search%20by%20a%20number%20of%20methods%20to%20zoom%20into%20a%20selected%20location%2C%20or%20to%20discover%20relevant%20information%20that%20relates%20to%20the%20selection.%20Selected%20data%20may%20be%20viewed%20in%20the%20map%20and%20in%20a%20list%20or%20table%20format%2C%20and%20may%20be%20exported%20in%20spreadsheet%20format.%20Data%20is%20updated%20nightly.%3C%2Fspan%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22font-size%3A%2010pt%3B%22%3E%3Cbr%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22font-size%3A%2010pt%3B%22%3E%3Cfont%20face%3D%22Times%20New%20Roman%22%20size%3D%223%22%3E%0A%0A%3C%2Ffont%3E%3Cp%20style%3D%22margin%3A%200cm%200cm%200pt%3B%22%3E%3Cb%3E%3Cfont%20face%3D%22Calibri%22%20size%3D%223%22%3EThe%20land%20custodianship%20map%20is%20currently%20being%20reviewed%0Aand%20updated%20to%20reflect%20the%20ACT%20Government's%20current%20structure%3C%2Ffont%3E%3C%2Fb%3E%3Cbr%3E%3C%2Fp%3E%3C%2Fdiv%3E",
              "included": true,
              "title": "Map Information"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoViewModel",
            "id": "InfoViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoModule",
        "moduleName": "Info",
        "configuration": {},
        "views": [
          {
            "viewModelId": "InfoViewModel",
            "title": "@language-common-welcome",
            "region": "HomePanelContainerRegion",
            "id": "InfoView",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoView",
            "markup": "Mapping/modules/Info/InfoView.html"
          }
        ]
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.insightIntegration.InsightIntegrationModule",
        "moduleName": "InsightIntegration",
        "configuration": {
          "dataRelayIntervalInSeconds": 30,
          "enabled": false,
          "dataRelayUri": "http://localhost/Geocortex/Analytics/ClientRelay"
        }
      },
      {
        "viewModels": [
          {
            "configuration": {
              "externalComponents": [
                {
                  "id": "bingMaps",
                  "displayName": "Bing Maps",
                  "uri": "Resources/ThirdPartyMaps/BingMaps.html",
                  "viewpointIndicatorUri": "Resources/Images/Icons/location-direction-red-32.png"
                },
                {
                  "id": "googleMaps",
                  "displayName": "Google Street View",
                  "uri": "Resources/3rdPartyMaps/GoogleMaps.html",
                  "viewpointIndicatorUri": "Resources/Images/Icons/location-direction-blue-32.png"
                }
              ],
              "selectorText": "@language-integration-selector-text",
              "statusText": "@language-integration-viewpoint-indicator-desc",
              "containerRegionType": "geocortex.framework.ui.DivStackRegionAdapter",
              "selectorIconUri": "Resources/Images/Icons/Toolbar/map-24.png",
              "showXButton": true,
              "showMaximizeButton": true,
              "headerIsVisible": true,
              "resizeY": true,
              "containerRegionName": "ExternalComponentRegion",
              "defaultComponents": [
                "googleMaps"
              ]
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.integration.ExternalComponentViewModel",
            "id": "ExternalComponentViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.integration.IntegrationModule",
        "moduleName": "Integration",
        "configuration": {
          "allowedOrigins": []
        },
        "views": [
          {
            "viewModelId": "ExternalComponentViewModel",
            "region": "BottomPanelRegion",
            "id": "ExternalComponentView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.integration.ExternalComponentView",
            "markup": "Mapping/modules/Integration/ExternalComponentView.html"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "showGlobalMenu": true,
              "showMenu": true,
              "menuTitle": "@language-menu-title",
              "primaryButtonColor": "#1A72C4"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuViewModel",
            "id": "IWantToMenuViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuModule",
        "moduleName": "IWantToMenu",
        "configuration": {
          "menus": [
            {
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "text": "Search Blocks",
                  "commandParameter": "Search_Blocks",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/searchBlocks.png",
                  "command": "RunWorkflowById",
                  "description": "Search for Blocks"
                },
                {
                  "text": "Switch Map",
                  "commandParameter": "SwitchMapHTML",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/SwithMap.png",
                  "command": "RunWorkflowById",
                  "description": "Switch to another Map"
                },
                {
                  "text": "Open Map Information",
                  "commandParameter": null,
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/InfomationLogo.png",
                  "command": "ShowHomePanel",
                  "description": "Open Map Information Panel"
                },
                {
                  "text": "Share Current Map",
                  "commandParameter": null,
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/share-map-24.png",
                  "command": "ShowShareView",
                  "description": "@language-toolbar-tasks-share-tooltip"
                },
                {
                  "text": "Create a Printable map",
                  "commandParameter": null,
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/print-24.png",
                  "command": "PrintMap",
                  "description": "Create a Printable map"
                },
                {
                  "text": "@language-menu-map-layers",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
                  "command": "ShowLayerList",
                  "description": "@language-menu-map-layers-desc"
                },
                {
                  "text": "Open ACTmapi homepage",
                  "commandParameter": "http://www.actmapi.act.gov.au/home.html",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/home-24.png",
                  "command": "OpenWebPage",
                  "description": "Open ACTmapi homepage"
                },
                {
                  "text": "@language-menu-zoom-initial-extent",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-initial-24.png",
                  "command": "ZoomToInitialExtent",
                  "description": "@language-menu-zoom-initial-extent-desc"
                },
                {
                  "hideOnDisable": true,
                  "text": "@language-menu-bookmark-add",
                  "iconUri": "Resources/Images/Icons/bookmark-24.png",
                  "command": "ShowAddBookmark",
                  "description": "@language-menu-bookmark-add-desc"
                },
                {
                  "text": "Leave Feedback",
                  "commandParameter": "https://www.accesscanberra.act.gov.au/app/ask/",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/contact-24.png",
                  "command": "OpenWebPage",
                  "description": "Leave feedback about ACTmapi"
                },
                {
                  "text": "Open Google Streetview",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/Custom/location-direction-blue-32.png",
                  "commandParameter": null,
                  "command": "ShowExternalComponentView",
                  "description": "Open Google Streetview for current map"
                },
                {
                  "text": "Extract and Download Data",
                  "commandParameter": "SwitchMapHTML4DataDownload",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/download-24.png",
                  "command": "RunWorkflowById",
                  "description": "Extract and Download Data"
                }
              ],
              "id": "Iwantto",
              "description": "@language-menu-menus-description"
            }
          ]
        },
        "views": [
          {
            "markup": "Mapping/modules/IWantToMenu/IWantToMenuButtonView.html",
            "viewModelId": "IWantToMenuViewModel",
            "region": "NavigationMapRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuButtonView",
            "id": "IWantToMenuButtonView"
          },
          {
            "markup": "Mapping/modules/IWantToMenu/IWantToMenuView.html",
            "viewModelId": "IWantToMenuViewModel",
            "region": "IWantToMenuRegion",
            "visible": false,
            "configuration": {
              "menuId": "Iwantto"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuView",
            "id": "IWantToMenuView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "labelPlacementIsVisible": true,
              "showLabelsIsVisible": true,
              "showLabels": true,
              "haloSizeIsVisible": false,
              "fontSizeIsVisible": true,
              "fontColor": "#000000",
              "fontStyleIsVisible": false,
              "fontFamiliesIsVisible": false,
              "fieldIsVisible": true,
              "haloSize": 0,
              "fontIsUnderline": false,
              "fontColorIsVisible": true,
              "haloColorIsVisible": false,
              "haloColor": "#000000",
              "fontIsItalic": false,
              "fontIsBold": false,
              "fontFamilies": [
                "Arial",
                "Cambria",
                "Georgia",
                "Times New Roman",
                "Verdana"
              ],
              "fontSize": {
                "min": 6,
                "max": 32,
                "value": 12,
                "step": 1
              }
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.labelOptions.LabelOptionsViewModel",
            "id": "LabelOptionsViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.labelOptions.LabelOptionsModule",
        "moduleName": "LabelOptions",
        "configuration": {},
        "views": [
          {
            "markup": "Mapping/modules/LabelOptions/LabelOptionsView.html",
            "viewModelId": "LabelOptionsViewModel",
            "title": "@language-labelOptions-title",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.labelOptions.LabelOptionsView",
            "id": "LabelOptionsView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "layerDefaults": {
                "identifiable": true,
                "showMapTips": true,
                "queryable": true,
                "searchable": true
              },
              "zoomToUserAddedLayers": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.LayerAdditionViewModel",
            "id": "LayerAdditionViewModel"
          },
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.LayerPropertiesViewModel",
            "id": "LayerPropertiesViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.LayerAddition",
        "moduleName": "LayerAddition",
        "configuration": {},
        "views": [
          {
            "viewModelId": "LayerAdditionViewModel",
            "title": "@language-layer-addition-search-title",
            "region": "LayerAdditionContainerRegion",
            "id": "AddLayerDialogView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.AddLayerDialogView",
            "markup": "Mapping/modules/LayerAddition/Dialogs/AddLayerDialogView.html",
            "require": "Mapping/modules/LayerAddition/Dialogs/AddLayerDialogView"
          },
          {
            "viewModelId": "LayerAdditionViewModel",
            "title": "@language-layer-addition-service-connections-title",
            "region": "LayerAdditionContainerRegion",
            "id": "ServiceConnectionsDialogView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.ServiceConnectionsDialogView",
            "markup": "Mapping/modules/LayerAddition/Dialogs/ServiceConnectionsDialogView.html",
            "require": "Mapping/modules/LayerAddition/Dialogs/ServiceConnectionsDialogView"
          },
          {
            "viewModelId": "LayerAdditionViewModel",
            "title": "@language-layer-addition-map-services-title",
            "region": "LayerAdditionContainerRegion",
            "id": "MapServicesDialogView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.MapServicesDialogView",
            "markup": "Mapping/modules/LayerAddition/Dialogs/MapServicesDialogView.html",
            "require": "Mapping/modules/LayerAddition/Dialogs/MapServicesDialogView"
          },
          {
            "viewModelId": "LayerAdditionViewModel",
            "title": "@language-layer-addition-sub-layers-title",
            "region": "LayerAdditionContainerRegion",
            "id": "SubLayersDialogView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.SubLayersDialogView",
            "markup": "Mapping/modules/LayerAddition/Dialogs/SubLayersDialogView.html",
            "require": "Mapping/modules/LayerAddition/Dialogs/SubLayersDialogView"
          },
          {
            "markup": "Mapping/modules/LayerAddition/LayerPropertiesView.html",
            "viewModelId": "LayerPropertiesViewModel",
            "title": "@language-layer-addition-layer-properties",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.LayerPropertiesView",
            "id": "LayerPropertiesView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "infoLink": {
                "enabled": false,
                "command": "",
                "iconUri": "Resources/Images/Icons/info-12.png",
                "tooltip": "",
                "text": ""
              }
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerCatalog.LayerCatalogViewModel",
            "id": "LayerCatalogViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerCatalog.LayerCatalogModule",
        "moduleName": "LayerCatalog",
        "configuration": {
          "layerCatalogProviders": [
            {
              "enabled": true,
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerCatalog.EssentialsSiteProvider"
            },
            {
              "enabled": false,
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerCatalog.AssemblyProvider"
            }
          ]
        },
        "views": [
          {
            "markup": "Mapping/modules/LayerCatalog/LayerCatalogView.html",
            "viewModelId": "LayerCatalogViewModel",
            "title": "@language-layer-catalog-layercatalogview-title",
            "region": "ModalWindowRegion",
            "visible": false,
            "configuration": {
              "minFilterLength": 3,
              "autocompleteEnabled": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerCatalog.LayerCatalogView",
            "id": "LayerCatalogView"
          }
        ]
      },
      {
        "moduleName": "LayerDrawingOrder",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerDrawingOrder.LayerDrawingOrderModule",
        "configuration": {},
        "views": [
          {
            "id": "LayerGroupsDialogView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerDrawingOrder.LayerGroupsDialogView",
            "require": "Mapping/modules/LayerDrawingOrder/Dialogs/LayerGroupsDialogView",
            "markup": "Mapping/modules/LayerDrawingOrder/Dialogs/LayerGroupsDialogView.html",
            "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
            "viewModelId": "LayerDrawingOrderViewModel",
            "region": "DrawingOrderContainerRegion",
            "title": "@language-layerDrawingOrder-groups-title",
            "visible": false
          },
          {
            "id": "OrderServicesDialogView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerDrawingOrder.OrderServicesDialogView",
            "require": "Mapping/modules/LayerDrawingOrder/Dialogs/OrderServicesDialogView",
            "markup": "Mapping/modules/LayerDrawingOrder/Dialogs/OrderServicesDialogView.html",
            "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
            "viewModelId": "LayerDrawingOrderViewModel",
            "region": "DrawingOrderContainerRegion",
            "title": "@language-layerDrawingOrder-services-title",
            "visible": false
          },
          {
            "id": "OrderLayersDialogView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerDrawingOrder.OrderLayersDialogView",
            "require": "Mapping/modules/LayerDrawingOrder/Dialogs/OrderLayersDialogView",
            "markup": "Mapping/modules/LayerDrawingOrder/Dialogs/OrderLayersDialogView.html",
            "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
            "viewModelId": "LayerDrawingOrderViewModel",
            "region": "DrawingOrderContainerRegion",
            "title": "@language-layerDrawingOrder-layers-title",
            "visible": false
          }
        ],
        "viewModels": [
          {
            "id": "LayerDrawingOrderViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerDrawingOrder.LayerDrawingOrderViewModel"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "showTransparencySlider": true,
              "autoExpandLegendSwatches": false
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListViewModel",
            "id": "LayerListViewModel"
          },
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerActionsViewModel",
            "id": "LayerActionsViewModel",
            "require": "Mapping/modules/LayerList/LayerActions/LayerActionsViewModel"
          },
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuViewModel",
            "id": "MapServiceActionsViewModel",
            "require": "geocortex/infrastructure/menus/MenuViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListModule",
        "moduleName": "LayerList",
        "configuration": {
          "autoActivateAncestorVisibilities": false,
          "enableLayerIcons": false,
          "onlyShowSwatchesOnVisibleLayers": false,
          "enableLegendIntegration": true
        },
        "views": [
          {
            "viewModelId": "LayerListViewModel",
            "title": "@language-layerlist-title",
            "region": "LayerDataContainerRegion",
            "id": "LayerListView",
            "visible": false,
            "isManaged": false,
            "configuration": {
              "showStatusMessages": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListView",
            "markup": "Mapping/modules/LayerList/LayerListView.html"
          },
          {
            "markup": "Mapping/modules/LayerList/LayerActions/LayerActionsView.html",
            "viewModelId": "LayerActionsViewModel",
            "title": "@language-layer-actions-title",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-menu-24.png",
            "configuration": {
              "menuId": "LayerActions"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerActionsView",
            "id": "LayerActionsView",
            "require": "Mapping/modules/LayerList/LayerActions/LayerActionsView"
          },
          {
            "markup": "Mapping/modules/LayerList/MapServiceActions/MapServiceActionsView.html",
            "viewModelId": "MapServiceActionsViewModel",
            "title": "@language-mapservice-actions-title",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-menu-24.png",
            "configuration": {
              "menuId": "MapServiceActions"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.MapServiceActionsView",
            "id": "MapServiceActionsView",
            "require": "Mapping/modules/LayerList/MapServiceActions/MapServiceActionsView"
          }
        ]
      },
      {
        "moduleName": "LayerSelector",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerSelector.LayerSelectorModule",
        "configuration": {}
      },
      {
        "viewModels": [
          {
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerStyles.LayerStyleSelectorViewModel",
            "id": "LayerStyleSelectorViewModel",
            "configuration": {
              "showImageSelector": true
            }
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerStyles.LayerStylesModule",
        "moduleName": "LayerStyles",
        "configuration": {},
        "views": [
          {
            "viewModelId": "LayerStyleSelectorViewModel",
            "title": "@language-layerstyles-name",
            "region": "LayerVisualizationRegion",
            "id": "LayerStyleSelectorView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerStyles.LayerStyleSelectorView",
            "markup": "Mapping/modules/LayerStyles/LayerStyleSelectorView.html"
          }
        ]
      },
      {
        "viewModels": [],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerThemes.LayerThemesModule",
        "moduleName": "LayerThemes",
        "configuration": {},
        "views": []
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendViewModel",
            "id": "LegendViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendModule",
        "moduleName": "Legend",
        "configuration": {},
        "views": [
          {
            "viewModelId": "LegendViewModel",
            "title": "@language-legend-title",
            "region": "LayerDataContainerRegion",
            "id": "LegendView",
            "visible": false,
            "isManaged": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendView",
            "markup": "Mapping/modules/Legend/LegendView.html"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "stepZoomFactor": 0.5
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapViewModel",
            "id": "MapViewModel"
          },
          {
            "configuration": {},
            "type": "geocortex.framework.ui.ViewModelBase",
            "id": "MapContextMenuViewModel",
            "require": "geocortex/framework/ui/ViewModelBase"
          },
          {
            "configuration": {
              "showReverseGeocoder": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.ReverseGeocodeViewModel",
            "id": "ContextMenuReverseGeocodeViewModel",
            "require": "Mapping/modules/Map/MapContextMenu/Views/ReverseGeocode/ReverseGeocodeViewModel"
          },
          {
            "configuration": {
              "showCoordinates": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.CoordinatesViewModel",
            "id": "ContextMenuCoordinatesViewModel",
            "require": "Mapping/modules/Map/MapContextMenu/Views/Coordinates/CoordinatesViewModel"
          },
          {
            "configuration": {
              "showMenu": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapMenuViewModel",
            "id": "ContextMenuMapMenuViewModel",
            "require": "Mapping/modules/Map/MapContextMenu/Views/Menu/MapMenuViewModel"
          },
          {
            "configuration": {
              "customCoordinateSystems": [
                {
                  "wkid": 28355,
                  "displayName": "MGA GDA 94",
                  "output": "xy"
                },
                {
                  "wkid": 102071,
                  "displayName": "ACT Stromlo Grid",
                  "output": "xy"
                }
              ],
              "fractionalDigits": 0,
              "defaultCoordinateDisplayTypes": [
                "dd",
                "ddm",
                "dms",
                "xy"
              ],
              "defaultGcsWkid": "4326"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.coordinates.CoordinatesModel",
            "id": "MapCoordinatesModel",
            "require": "geocortex/infrastructure/coordinates/CoordinatesModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapModule",
        "moduleName": "Map",
        "configuration": {
          "behaviors": [
            {
              "commands": [
                "InvokeMapTip"
              ],
              "name": "MapOnClickBehavior"
            },
            {
              "commands": [
                "ActivateMapContextMenu"
              ],
              "name": "MapOnLongClickBehavior"
            },
            {
              "commands": [
                "ShowMapTip"
              ],
              "name": "MapOnFeatureClickBehavior"
            },
            {
              "commands": [
                "ActivateMapContextMenu"
              ],
              "name": "MapOnContextMenuBehavior"
            },
            {
              "commands": [],
              "name": "MapTimeExtentChangedBehavior",
              "event": "MapTimeExtentChangedEvent"
            }
          ],
          "zoomRate": 50,
          "zoomDuration": 500,
          "defaultPointFeatureZoomScales": [],
          "longClickMilliseconds": 500,
          "showLoadingStatus": true,
          "menus": [
            {
              "defaultIconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
              "items": [
                {
                  "text": "@language-menu-identify",
                  "commandParameter": "{{context}}",
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
                  "command": "Identify"
                },
                {
                  "text": "@language-menu-draw-point",
                  "commandParameter": "{{context}}",
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                  "command": "AddMarkup"
                },
                {
                  "text": "@language-menu-plot-coordinate",
                  "commandParameter": "{{context}}",
                  "iconUri": "Resources/Images/Icons/Toolbar/coordinates-add-24.png",
                  "command": "PlotCoordinates"
                },
                {
                  "text": "@language-menu-add-text",
                  "commandParameter": "{{context}}",
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-text-24.png",
                  "command": "AddTextMarkup"
                },
                {
                  "text": "@language-menu-center-map",
                  "commandParameter": "{{context}}",
                  "iconUri": "Resources/Images/Icons/center-map-24.png",
                  "command": "PanToPoint"
                }
              ],
              "id": "MapContextMenu"
            }
          ],
          "maxExtentLogSize": 100,
          "loadingMessageTiming": [
            1000,
            3000,
            3000
          ],
          "panRate": 50,
          "panDuration": 350,
          "tools": [
            {
              "isSticky": true,
              "drawMode": "POINT",
              "command": "PanToPoint",
              "name": "CenterMapTool",
              "statusText": "@language-dsk-map-center"
            },
            {
              "isSticky": true,
              "drawMode": "EXTENT",
              "command": "ZoomToExtent",
              "name": "ZoomInTool",
              "statusText": "@language-map-zoom-in"
            },
            {
              "isSticky": true,
              "drawMode": "EXTENT",
              "command": "ZoomOutToExtent",
              "name": "ZoomOutTool",
              "statusText": "@language-map-zoom-out"
            }
          ]
        },
        "views": [
          {
            "markup": "Mapping/modules/Map/MapView.html",
            "viewModelId": "MapViewModel",
            "region": "MapRegion",
            "visible": true,
            "configuration": {
              "wrapAround180": false,
              "showAttribution": true,
              "fitTiledMapsToExtent": false,
              "extentBroadcastFrequency": 20,
              "disableMapKeyboardNavigation": false
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapView",
            "id": "MapView"
          },
          {
            "viewModelId": "MapContextMenuViewModel",
            "title": "@language-map-context-menu-title",
            "region": "ContextMenuContentRegion",
            "id": "MapContextMenuView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapContextMenuView",
            "markup": "Mapping/modules/Map/MapContextMenu/MapContextMenuView.html",
            "require": "Mapping/modules/Map/MapContextMenu/MapContextMenuView"
          },
          {
            "markup": "Mapping/modules/Map/MapContextMenu/Views/ReverseGeocode/ReverseGeocodeView.html",
            "viewModelId": "ContextMenuReverseGeocodeViewModel",
            "region": "MapContextMenuContentRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.framework.ui.ViewBase",
            "id": "ContextMenuReverseGeocodeView",
            "require": "geocortex/framework/ui/ViewBase"
          },
          {
            "markup": "Mapping/modules/Map/MapContextMenu/Views/Coordinates/CoordinatesView.html",
            "viewModelId": "ContextMenuCoordinatesViewModel",
            "region": "MapContextMenuContentRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.framework.ui.ViewBase",
            "id": "ContextMenuCoordinatesView",
            "require": "geocortex/framework/ui/ViewBase"
          },
          {
            "markup": "Mapping/modules/Map/MapContextMenu/Views/Menu/MapMenuView.html",
            "viewModelId": "ContextMenuMapMenuViewModel",
            "region": "MapContextMenuContentRegion",
            "visible": true,
            "configuration": {
              "menuId": "MapContextMenu"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapMenuView",
            "id": "ContextMenuMapMenuView",
            "require": "Mapping/modules/Map/MapContextMenu/Views/Menu/MapMenuView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipContentViewModel",
            "id": "MapTipViewModel",
            "require": "Mapping/modules/MapTips/MapTipContentViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipsModule",
        "moduleName": "MapTips",
        "configuration": {
          "behaviors": [
            {
              "commands": [
                "StopEditingClickableFeature"
              ],
              "name": "MapTipOnCloseBehavior",
              "event": "MapTipClosedEvent"
            },
            {
              "commands": [],
              "name": "MapCalloutClosedBehavior",
              "event": "MapCalloutClosedEvent"
            },
            {
              "commands": [
                "PanToFeatureIfOutsideMapExtent",
                "StopAndAutoEditClickableFeature"
              ],
              "name": "MapTipFeatureChangedBehavior"
            }
          ],
          "contentField": "longDescription",
          "webMapFeaturePresenter": {
            "viewModel": {
              "libraryId": "Mapping",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesViewModel"
            },
            "featurePropertyName": "currentFeature",
            "force": false,
            "view": {
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttributesView.html",
              "libraryId": "Mapping",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesView"
            }
          },
          "allowMultiple": false,
          "nullGeometryStatusMessageEnabled": true,
          "nullGeometryStatusMessageArgs": {
            "timeoutMS": 5000,
            "imageUri": "@language-map-tip-null-geometry-status-message-uri"
          },
          "showNoResultMapTips": false
        },
        "views": [
          {
            "viewModelId": "MapTipViewModel",
            "region": "NavigationMapRegion",
            "id": "MapTipView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipView",
            "markup": "Mapping/modules/MapTips/MapTipView.html"
          },
          {
            "viewModelId": "MapTipViewModel",
            "region": "MapTipHeaderRegion",
            "id": "MapTipHeaderView",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipHeaderView",
            "markup": "Mapping/modules/MapTips/MapTipHeaderView.html"
          },
          {
            "viewModelId": "MapTipViewModel",
            "region": "MapTipContentRegion",
            "id": "MapTipContentView",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipContent",
            "markup": "Mapping/modules/MapTips/MapTipContent.html",
            "require": "Mapping/modules/MapTips/MapTipContent"
          }
        ]
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.markers.MarkersModule",
        "moduleName": "Markers",
        "configuration": {
          "markers": []
        }
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupModule",
        "moduleName": "Markup",
        "views": [
          {
            "id": "MarkupStyleView",
            "viewModelId": "MarkupStyleViewModel",
            "require": "Mapping/modules/Markup/MarkupStyles/MarkupStyleView",
            "markup": "Mapping/modules/Markup/MarkupStyles/MarkupStyleView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "configuration": {
              "defaultTextMarkup": {
                "textStyle": "Normal",
                "textSize": "14pt",
                "textColor": "#FF000000",
                "textFamily": "Calibri",
                "textStyleWeight": "Bold",
                "textHaloColor": "#FFFFFFFF",
                "textHaloSize": 1
              },
              "defaultPointMarkup": {
                "pointColor": "#FF4CA0D8",
                "pointStyle": "Circle",
                "pointSize": 16
              },
              "markupLayerName": "Drawings",
              "defaultPolygonMarkup": {
                "polygonBorderStyle": "Solid",
                "polygonBorderWidth": 3,
                "polygonBorderColor": "#FF4CA0D8",
                "polygonFillStyle": "Solid",
                "polygonFillColor": "#4D4CA0D8"
              },
              "defaultLineMarkup": {
                "lineWidth": 3,
                "lineStyle": "Dash",
                "lineColor": "#FF4CA0D8"
              },
              "customMarkupTools": {
                "text": [],
                "polyline": [],
                "polygon": [],
                "point": []
              },
              "styleSelectorRegion": "LayerDataContainerRegion"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupViewModel",
            "id": "MarkupViewModel"
          },
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteViewModel",
            "id": "TransientMarkupPaletteViewModel",
            "require": "Mapping/modules/Markup/ToolPalettes/TransientMarkupPaletteViewModel"
          },
          {
            "id": "MarkupTemplateSelectorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupTemplateSelectorViewModel",
            "require": "Mapping/modules/Markup/MarkupStyles/MarkupTemplateSelector/MarkupTemplateSelectorViewModel",
            "configuration": {
              "pointLibraries": [
                "Solid",
                "Hollow",
                "Black Outline"
              ],
              "lineLibraries": [
                "Thin",
                "Thick",
                "Thickest"
              ],
              "polygonLibraries": [
                "Transparent Fill",
                "Solid Fill",
                "Outline"
              ],
              "textLibraries": [
                "Sans-Serif",
                "Serif"
              ]
            }
          },
          {
            "id": "MarkupSymbolSelectorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupSymbolSelectorViewModel",
            "require": "Mapping/modules/Markup/MarkupStyles/MarkupSymbolSelector/MarkupSymbolSelectorViewModel",
            "configuration": {
              "symbologyConfig": {
                "userSelectedOutlineColor": true
              },
              "textSymbologyConfig": {}
            }
          },
          {
            "id": "MarkupStyleViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupStyleViewModel",
            "require": "Mapping/modules/Markup/MarkupStyles/MarkupStyleViewModel",
            "configuration": {
              "containerRegionName": "MarkupStyleSelectorRegion",
              "defaultDisplayName": "@language-markup-select-style",
              "containerTitle": "@language-markup-select-style",
              "enableImageSelector": true,
              "enableTemplateSelector": true,
              "enableSymbolSelector": true
            }
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "totalMeasurementHighlightColor": "#000000",
              "textSize": "12px",
              "outlineColor": "#000000",
              "totalMeasurementTextColor": "#FFFFFF",
              "totalMeasurementOutlineColor": "#FFFFFF",
              "highlightRadius": "5",
              "totalMeasurementOutlineWidth": "2",
              "markupLayerName": "Drawings",
              "highlightColor": "#FFFFFF",
              "fillColor": "#6495ED",
              "lineColor": "#0000FF",
              "outlineWidth": "1",
              "textColor": "#000000",
              "addMarkupToMapByDefault": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementViewModel",
            "id": "MeasurementViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementModule",
        "moduleName": "Measurement",
        "configuration": {
          "measurementResultTypes": [
            "LINE",
            "POLYGON",
            "POLYLINE",
            "RECTANGLE",
            "TRIANGLE"
          ],
          "measurementProjectionWkid": "",
          "calculationType": "preserveShape",
          "angleDirectionSystem": "polar",
          "enablePrediction": true,
          "coordinateFractionalDigits": 4,
          "degreeFormat": "dd",
          "measurementAreaUnits": "sqMeter",
          "measurementLengthUnits": "meter",
          "measurementFractionalDigits": 2,
          "tools": [
            {
              "name": "MeasureDistanceTool",
              "isSticky": true,
              "keyboardStatusText": "@language-measurement-measure-distance-tool-status-keyboard",
              "iconUri": "Resources/Images/Icons/Toolbar/measure-distance-24.png",
              "statusText": "@language-measurement-measure-distance-tool-status",
              "command": "MeasureDistance",
              "drawMode": "POLYLINE"
            },
            {
              "name": "MeasureAreaTool",
              "isSticky": true,
              "keyboardStatusText": "@language-measurement-measure-area-tool-status-keyboard",
              "iconUri": "Resources/Images/Icons/Toolbar/measure-area-24.png",
              "statusText": "@language-measurement-measure-area-tool-status",
              "command": "MeasureArea",
              "drawMode": "POLYGON"
            },
            {
              "name": "DeleteMeasurementTool",
              "isSticky": true,
              "keyboardStatusText": "@language-measurement-erase-status-keyboard",
              "iconUri": "Resources/Images/Icons/Toolbar/Erase-24.png",
              "statusText": "@language-measurement-erase-status",
              "command": "DeleteMeasurement",
              "drawMode": "POINT"
            }
          ]
        },
        "views": [
          {
            "markup": "Mapping/modules/Measurement/MeasurementView.html",
            "viewModelId": "MeasurementViewModel",
            "region": "MeasurementDropdownRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementView",
            "id": "MeasurementView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "attachFileViewId": "AttachFileView"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.AttachFileViewModel",
            "id": "AttachFileViewModel",
            "require": "Mapping/modules/Native/AttachFileViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.NativeIntegrationModule",
        "moduleName": "Native",
        "configuration": {},
        "views": [
          {
            "markup": "Mapping/modules/Native/AttachFileView.html",
            "viewModelId": "AttachFileViewModel",
            "title": "@language-native-attach-file",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "isManaged": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.AttachFileView",
            "id": "AttachFileView",
            "require": "Mapping/modules/Native/AttachFileView"
          }
        ],
        "require": "Mapping/modules/Native/NativeModule"
      },
      {
        "viewModels": [],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.navigation.NavigationModule",
        "moduleName": "Navigation",
        "configuration": {},
        "views": [
          {
            "markup": "Mapping/modules/Shells/Components/DataFrameButtonView.html",
            "viewModelId": "DataFrameViewContainerViewModel",
            "region": "TopMapRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.components.DataFrameButtonView",
            "id": "DataFrameButtonView",
            "require": "Mapping/modules/Shells/Components/DataFrameButtonView"
          },
          {
            "markup": "Mapping/modules/Geolocate/GeolocateButtonView.html",
            "viewModelId": "GeolocateViewModel",
            "region": "TopLeftMapRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateView",
            "id": "GeolocateButtonView",
            "require": "Mapping/modules/Geolocate/GeolocateView"
          },
          {
            "markup": "Mapping/modules/ZoomControl/ZoomInView.html",
            "region": "TopLeftMapRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomInView",
            "id": "ZoomInView",
            "require": "Mapping/modules/ZoomControl/ZoomInView"
          },
          {
            "markup": "Mapping/modules/ZoomControl/ZoomOutView.html",
            "region": "TopLeftMapRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomOutView",
            "id": "ZoomOutView",
            "require": "Mapping/modules/ZoomControl/ZoomOutView"
          },
          {
            "viewModelId": "BookmarksViewModel",
            "region": "TopLeftMapRegion",
            "id": "BookmarksButtonView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksView",
            "markup": "Mapping/modules/Bookmarks/BookmarksButtonView.html",
            "require": "Mapping/modules/Bookmarks/BookmarksView"
          },
          {
            "markup": "Mapping/modules/Shells/Components/DataFrameResizeButtonView.html",
            "viewModelId": "DataFrameViewContainerViewModel",
            "region": "MiddleLeftMapRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.components.DataFrameResizeButtonView",
            "id": "DataFrameResizeButtonView",
            "require": "Mapping/modules/Shells/Components/DataFrameResizeButtonView"
          }
        ]
      },
      {
        "moduleName": "Notifications",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.notifications.NotificationsModule",
        "configuration": {
          "region": "TopMapRegion"
        },
        "views": [],
        "viewModels": []
      },
      {
        "viewModels": [],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.offline.OfflineModule",
        "moduleName": "Offline",
        "configuration": {},
        "views": []
      },
      {
        "viewModels": [
          {
            "configuration": {
              "menus": [
                {
                  "items": [
                    {
                      "text": "@language-menu-list-offline-maps-actions-refresh",
                      "commandParameter": null,
                      "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
                      "command": "RefreshOfflineMapsList",
                      "description": "@language-menu-list-offline-maps-actions-refresh-desc"
                    },
                    {
                      "text": "@language-offline-maps-manage-button",
                      "commandParameter": "ManageOfflineMapsView",
                      "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
                      "command": "ActivateView",
                      "description": "@language-offline-maps-manage-button-desc"
                    }
                  ],
                  "id": "ListOfflineMapsActions",
                  "description": "@language-menu-list-offline-maps-actions-desc"
                },
                {
                  "items": [
                    {
                      "text": "@language-menu-list-offline-maps-actions-refresh",
                      "commandParameter": null,
                      "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
                      "command": "RefreshOfflineMapsList",
                      "description": "@language-menu-list-offline-maps-actions-refresh-desc"
                    }
                  ],
                  "id": "ManageOfflineMapsActions",
                  "description": "@language-menu-list-offline-maps-actions-desc"
                }
              ],
              "saveOfflineMaps": true,
              "defaultThumbnail": "Resources/Images/Icons/map-no-preview-70x50.png"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.OfflineMapsViewModel",
            "id": "OfflineMapsViewModel"
          },
          {
            "configuration": {
              "onEditingStarted": [
                {
                  "commandParameter": "LayerDataContainerView",
                  "command": "DeactivateView"
                }
              ],
              "menus": [
                {
                  "items": [
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-clear",
                      "commandParameter": null,
                      "iconUri": "Resources/Images/Icons/Toolbar/clear-24.png",
                      "command": "SetOfflineMapEditorGeometry",
                      "description": "@language-menu-offline-map-editor-geometry-actions-clear-desc"
                    },
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-currentextent",
                      "commandParameter": "OfflineMapEditorCurrentExtentTool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-extent-24.png",
                      "command": "SetActiveTool",
                      "description": "@language-menu-offline-map-editor-geometry-actions-currentextent-desc"
                    },
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-polygon",
                      "commandParameter": "OfflineMapEditorPolygonTool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                      "command": "SetActiveTool",
                      "description": "@language-menu-offline-map-editor-geometry-actions-polygon-desc"
                    },
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-freehandpolygon",
                      "commandParameter": "OfflineMapEditorFreehandPolygonTool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                      "command": "SetActiveTool",
                      "description": "@language-menu-offline-map-editor-geometry-actions-freehandpolygon-desc"
                    },
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-circle",
                      "commandParameter": "OfflineMapEditorCircleTool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                      "command": "SetActiveTool",
                      "description": "@language-menu-offline-map-editor-geometry-actions-circle-desc"
                    },
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-ellipse",
                      "commandParameter": "OfflineMapEditorEllipseTool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                      "command": "SetActiveTool",
                      "description": "@language-menu-offline-map-editor-geometry-actions-ellipse-desc"
                    },
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-rectangle",
                      "commandParameter": "OfflineMapEditorRectangleTool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                      "command": "SetActiveTool",
                      "description": "@language-menu-offline-map-editor-geometry-actions-rectangle-desc"
                    }
                  ],
                  "id": "OfflineMapEditorGeometryActions",
                  "description": "@language-menu-offline-map-editor-geometry-actions-desc"
                }
              ],
              "tools": [
                {
                  "isSticky": false,
                  "drawMode": "CURRENT_EXTENT",
                  "command": "SetOfflineMapEditorGeometry",
                  "name": "OfflineMapEditorCurrentExtentTool"
                },
                {
                  "name": "OfflineMapEditorPolygonTool",
                  "isSticky": false,
                  "keyboardStatusText": "@language-feature-editing-dsk-polygon-tool-keyboard",
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                  "statusText": "@language-feature-editing-dsk-polygon-tool",
                  "command": "SetOfflineMapEditorGeometry",
                  "drawMode": "POLYGON"
                },
                {
                  "isSticky": false,
                  "drawMode": "FREEHAND_POLYGON",
                  "command": "SetOfflineMapEditorGeometry",
                  "name": "OfflineMapEditorFreehandPolygonTool",
                  "statusText": "@language-feature-editing-dsk-freehand-polygon-tool"
                },
                {
                  "name": "OfflineMapEditorCircleTool",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                  "statusText": "@language-feature-editing-circle-tool",
                  "command": "SetOfflineMapEditorGeometry",
                  "drawMode": "CIRCLE"
                },
                {
                  "name": "OfflineMapEditorEllipseTool",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                  "statusText": "@language-feature-editing-ellipse-tool",
                  "command": "SetOfflineMapEditorGeometry",
                  "drawMode": "ELLIPSE"
                },
                {
                  "name": "OfflineMapEditorRectangleTool",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                  "statusText": "@language-feature-editing-rectangle-tool",
                  "command": "SetOfflineMapEditorGeometry",
                  "drawMode": "EXTENT"
                }
              ],
              "thumbnail": {
                "width": 70,
                "dpi": 20,
                "height": 50
              },
              "onEditingFinished": [
                {
                  "commandParameter": "LayerDataContainerView",
                  "command": "ActivateView"
                },
                {
                  "commandParameter": "ManageOfflineMapsView",
                  "command": "ActivateView"
                }
              ]
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.OfflineMapEditorViewModel",
            "id": "OfflineMapEditorViewModel",
            "require": "Mapping/modules/OfflineMaps/Editor/OfflineMapEditorViewModel"
          },
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.basemap.OfflineMapEditorBasemapLevelsViewModel",
            "id": "OfflineMapEditorBasemapLevelsViewModel",
            "require": "Mapping/modules/OfflineMaps/Editor/Basemap/OfflineMapEditorBasemapLevelsViewModel"
          },
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.sync.SyncStatusViewModel",
            "id": "SyncStatusViewModel",
            "require": "Mapping/modules/OfflineMaps/Sync/SyncStatusViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.OfflineMapsModule",
        "moduleName": "OfflineMaps",
        "configuration": {
          "aoiMask": {
            "matchMapBackground": false,
            "boundaryWidth": 2,
            "enabled": false,
            "boundaryColor": "black",
            "boundaryStyle": "solid",
            "fillColor": null,
            "layerId": "OfflineMapsAOIMask"
          }
        },
        "views": [
          {
            "viewModelId": "OfflineMapsViewModel",
            "title": "@language-offline-maps-list-title",
            "region": "OfflineMapsContainerRegion",
            "id": "ListOfflineMapsView",
            "visible": false,
            "configuration": {
              "download": {
                "commandParameter": {
                  "offlineMap": "{{offlineMap}}"
                },
                "command": "StartOfflineDownloadAndShowProgress"
              },
              "sync": {
                "commandParameter": {
                  "offlineMap": "{{offlineMap}}"
                },
                "command": "StartOfflineSyncAndShowProgress"
              }
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.ListOfflineMapsView",
            "markup": "Mapping/modules/OfflineMaps/ListOfflineMapsView.html"
          },
          {
            "viewModelId": "OfflineMapsViewModel",
            "title": "@language-offline-maps-manage-title",
            "region": "OfflineMapsContainerRegion",
            "id": "ManageOfflineMapsView",
            "visible": false,
            "configuration": {
              "newOfflineMap": {
                "commandParameter": {},
                "command": "ShowOfflineMapEditor"
              },
              "editOfflineMap": {
                "commandParameter": {
                  "existingOfflineMap": "{{offlineMap}}"
                },
                "command": "ShowOfflineMapEditor"
              }
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.ManageOfflineMapsView",
            "markup": "Mapping/modules/OfflineMaps/ManageOfflineMapsView.html"
          },
          {
            "viewModelId": "OfflineMapEditorViewModel",
            "title": "",
            "region": "OfflineMapsContainerRegion",
            "id": "OfflineMapEditorView",
            "visible": false,
            "configuration": {
              "showBasemapsEditor": {
                "commandParameter": "OfflineMapEditorBasemapsView",
                "command": "ActivateView"
              },
              "showLayersEditor": {
                "commandParameter": "OfflineMapEditorLayersView",
                "command": "ActivateView"
              },
              "showSharingEditor": {
                "commandParameter": "OfflineMapEditorSharingView",
                "command": "ActivateView"
              },
              "showGeometryEditor": {
                "commandParameter": "OfflineMapEditorGeometryView",
                "command": "ActivateView"
              },
              "title": {
                "forNew": "@language-offlinemapeditor-new-title",
                "forExisting": "@language-offlinemapeditor-title"
              }
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.OfflineMapEditorView",
            "markup": "Mapping/modules/OfflineMaps/Editor/OfflineMapEditorView.html",
            "require": "Mapping/modules/OfflineMaps/Editor/OfflineMapEditorView"
          },
          {
            "viewModelId": "OfflineMapEditorViewModel",
            "title": "@language-offlinemapeditor-layers-title",
            "region": "OfflineMapsContainerRegion",
            "id": "OfflineMapEditorLayersView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.layers.OfflineMapEditorLayersView",
            "markup": "Mapping/modules/OfflineMaps/Editor/Layers/OfflineMapEditorLayersView.html",
            "require": "Mapping/modules/OfflineMaps/Editor/Layers/OfflineMapEditorLayersView"
          },
          {
            "viewModelId": "OfflineMapEditorViewModel",
            "title": "@language-offlinemapeditor-geometry-title",
            "region": "OfflineMapsContainerRegion",
            "id": "OfflineMapEditorGeometryView",
            "visible": false,
            "configuration": {
              "offViewOpacity": 0.5,
              "outlineWidth": 1,
              "outlineColor": "rgba(200, 0, 0, 0.7)",
              "fillColor": "rgba(200, 0, 0, 0.3)",
              "geometrylayerId": "OfflineMapEditorGeometry"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.geometry.OfflineMapEditorGeometryView",
            "markup": "Mapping/modules/OfflineMaps/Editor/Geometry/OfflineMapEditorGeometryView.html",
            "require": "Mapping/modules/OfflineMaps/Editor/Geometry/OfflineMapEditorGeometryView"
          },
          {
            "viewModelId": "OfflineMapEditorViewModel",
            "title": "@language-offlinemapeditor-basemaps-title",
            "region": "OfflineMapsContainerRegion",
            "id": "OfflineMapEditorBasemapsView",
            "visible": false,
            "configuration": {
              "showBasemapsLevelEditorView": {
                "commandParameter": {
                  "basemap": "{{basemap}}"
                },
                "command": "ShowOfflineMapEditorBasemapLevels"
              }
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.basemap.OfflineMapEditorBasemapsView",
            "markup": "Mapping/modules/OfflineMaps/Editor/Basemap/OfflineMapEditorBasemapsView.html",
            "require": "Mapping/modules/OfflineMaps/Editor/Basemap/OfflineMapEditorBasemapsView"
          },
          {
            "viewModelId": "OfflineMapEditorBasemapLevelsViewModel",
            "title": "@language-offlinemapeditor-basemaps-levels-title",
            "region": "OfflineMapsContainerRegion",
            "id": "OfflineMapEditorBasemapLevelsView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.basemap.OfflineMapEditorBasemapLevelsView",
            "markup": "Mapping/modules/OfflineMaps/Editor/Basemap/OfflineMapEditorBasemapLevelsView.html",
            "require": "Mapping/modules/OfflineMaps/Editor/Basemap/OfflineMapEditorBasemapLevelsView"
          },
          {
            "viewModelId": "OfflineMapEditorViewModel",
            "title": "@language-offlinemapeditor-sharing-title",
            "region": "OfflineMapsContainerRegion",
            "id": "OfflineMapEditorSharingView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.sharing.OfflineMapEditorSharingView",
            "markup": "Mapping/modules/OfflineMaps/Editor/Sharing/OfflineMapEditorSharingView.html",
            "require": "Mapping/modules/OfflineMaps/Editor/Sharing/OfflineMapEditorSharingView"
          },
          {
            "viewModelId": "SyncStatusViewModel",
            "title": "@language-offline-maps-sync-title",
            "region": "ModalWindowRegion",
            "id": "SyncStatusView",
            "visible": false,
            "configuration": {
              "showXButton": false
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.sync.SyncStatusView",
            "markup": "Mapping/modules/OfflineMaps/Sync/SyncStatusView.html",
            "require": "Mapping/modules/OfflineMaps/Sync/SyncStatusView"
          }
        ]
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.optimizerIntegration.OptimizerIntegrationModule",
        "moduleName": "OptimizerIntegration",
        "configuration": {
          "userName": "DefaultUser",
          "enabled": false,
          "dataRelayUri": "http://localhost/Geocortex/Optimizer/Rest/DataRelay/LogData.ashx?f=json"
        }
      },
      {
        "viewModels": [
          {
            "configuration": {
              "isEnabled": false,
              "visibleExtentColour": "#00FFFF",
              "extentScaleFactor": 2,
              "openByDefault": false
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.overviewMap.OverviewMapViewModel",
            "id": "OverviewMapViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.overviewMap.OverviewMapModule",
        "moduleName": "OverviewMap",
        "configuration": {},
        "views": [
          {
            "viewModelId": "OverviewMapViewModel",
            "region": "BottomRightMapRegion",
            "id": "OverviewMapView",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.overviewMap.OverviewMapView",
            "markup": "Mapping/modules/OverviewMap/OverviewMapView.html"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "isEnabled": true,
              "coordinatesModel": "MapCoordinatesModel"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.plotCoordinates.PlotCoordinatesViewModel",
            "id": "PlotCoordinatesViewModel"
          },
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.plotCoordinates.CoordinateActionsViewModel",
            "id": "CoordinateActionsViewModel",
            "require": "Mapping/modules/PlotCoordinates/CoordinateActions/CoordinateActionsViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.plotCoordinates.PlotCoordinatesModule",
        "moduleName": "PlotCoordinates",
        "configuration": {
          "behaviors": [
            {
              "commands": [
                "ClearDefaultHighlights",
                "PanToFeature",
                "HighlightFeatureDefault"
              ],
              "name": "CoordinateListItemClickedBehavior"
            },
            {
              "commands": [
                "ActivatePlotCoordinatesView",
                "OpenDataFrame"
              ],
              "name": "CoordinateEditingStartedBehavior"
            },
            {
              "commands": [
                "ClearActiveTool"
              ],
              "name": "CancelEditCoordinateBehavior"
            },
            {
              "commands": [
                "ClearDefaultHighlights",
                "ActivatePlotCoordinatesView",
                "OpenDataFrame"
              ],
              "name": "CoordinateEditedBehavior",
              "event": "CoordinateEditedEvent"
            },
            {
              "commands": [
                "ClearDefaultHighlights"
              ],
              "name": "CoordinateDeletedBehavior",
              "event": "CoordinateDeletedEvent"
            },
            {
              "commands": [
                "ClearDefaultHighlights",
                "ActivatePlotCoordinatesView",
                "OpenDataFrame"
              ],
              "name": "CoordinateAddedBehavior",
              "event": "CoordinateAddedEvent"
            }
          ],
          "tools": [
            {
              "hideOnDisable": false,
              "name": "PlotCoordinatesTool",
              "isSticky": true,
              "tooltip": "@language-plotcoordinates-tool-tooltip",
              "keyboardStatusText": "@language-plotcoordinates-tool-status-keyboard",
              "command": "PlotCoordinates",
              "statusText": "@language-plotcoordinates-tool-status",
              "iconUri": "Resources/Images/Icons/Toolbar/coordinates-add-24.png",
              "drawMode": "POINT"
            }
          ]
        },
        "views": [
          {
            "viewModelId": "PlotCoordinatesViewModel",
            "title": "@language-plotcoordinates-title",
            "region": "CoordinatesContainerRegion",
            "id": "PlotCoordinatesView",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/coordinates-map-tip-24.png",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.plotCoordinates.PlotCoordinatesView",
            "markup": "Mapping/modules/PlotCoordinates/PlotCoordinatesView.html"
          },
          {
            "markup": "Mapping/modules/PlotCoordinates/CoordinateActions/CoordinateActionsView.html",
            "viewModelId": "CoordinateActionsViewModel",
            "title": "@language-plotcoordinates-coordinate-actions-title",
            "region": "CoordinatesContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/menu-24.png",
            "configuration": {
              "menuId": "CoordinateActions"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.plotCoordinates.CoordinateActionsView",
            "id": "CoordinateActionsView",
            "require": "Mapping/modules/PlotCoordinates/CoordinateActions/CoordinateActionsView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "previewBorderThickness": 2,
              "previewBackgroundColor": [
                207,
                76,
                64,
                0.3
              ],
              "previewCenterImageUrl": "Resources/Images/center-cross-32.png",
              "previewBorderColor": [
                128,
                128,
                128
              ]
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingViewModel",
            "id": "PrintingViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingModule",
        "moduleName": "Printing",
        "configuration": {},
        "views": [
          {
            "viewModelId": "PrintingViewModel",
            "title": "@language-print-map",
            "region": "DataRegion",
            "id": "PrintingView",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/print-24.png",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingView",
            "markup": "Mapping/modules/Printing/PrintingView.html"
          },
          {
            "viewModelId": "PrintingViewModel",
            "region": "CenterRegion",
            "id": "UnlockedPrintPreviewView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.printing.UnlockedPrintPreviewView",
            "markup": "Mapping/modules/Printing/UnlockedPrintPreviewView.html"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuViewModel",
            "id": "ProjectActionsViewModel",
            "require": "geocortex/infrastructure/menus/MenuViewModel"
          },
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectEditorViewModel",
            "id": "ProjectEditorViewModel"
          },
          {
            "configuration": {
              "showUrlOnSave": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectStatusViewModel",
            "id": "ProjectStatusViewModel"
          },
          {
            "configuration": {
              "minimumFilterDelay": 300,
              "defaultThumbnail": "Resources/Images/Icons/map-no-preview-70x50.png"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectsViewModel",
            "id": "ProjectsViewModel"
          },
          {
            "configuration": {
              "confirmSharedPublicly": true,
              "showGuestLinks": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ShareProjectViewModel",
            "id": "ShareProjectViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectModule",
        "moduleName": "Project",
        "configuration": {},
        "views": [
          {
            "viewModelId": "ProjectActionsViewModel",
            "title": "@language-project-actions-title",
            "region": "ProjectContainerRegion",
            "id": "ProjectActionsView",
            "visible": false,
            "configuration": {
              "menuId": "ProjectActions"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectActionsView",
            "markup": "Mapping/modules/Project/ProjectActionsView.html"
          },
          {
            "viewModelId": "ProjectEditorViewModel",
            "title": "@language-project-editor-title",
            "region": "ProjectContainerRegion",
            "id": "ProjectEditorView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectEditorView",
            "markup": "Mapping/modules/Project/ProjectEditorView.html"
          },
          {
            "viewModelId": "ProjectStatusViewModel",
            "title": "@language-project-status-title",
            "region": "ModalWindowRegion",
            "id": "ProjectStatusView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectStatusView",
            "markup": "Mapping/modules/Project/ProjectStatusView.html"
          },
          {
            "viewModelId": "ProjectsViewModel",
            "title": "@language-project-projects-title",
            "region": "ProjectContainerRegion",
            "id": "ProjectsView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectsView",
            "markup": "Mapping/modules/Project/ProjectsView.html"
          },
          {
            "viewModelId": "ShareProjectViewModel",
            "title": "@language-project-share-title",
            "region": "ProjectContainerRegion",
            "id": "ShareProjectView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ShareProjectView",
            "markup": "Mapping/modules/Project/ShareProjectView.html"
          }
        ]
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.prompt.PromptModule",
        "moduleName": "Prompt",
        "configuration": {
          "promptRegion": "ModalWindowRegion"
        }
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.pushpins.PushpinsModule",
        "moduleName": "Pushpins",
        "configuration": {
          "behaviors": [
            {
              "name": "PushpinClickedBehavior",
              "commands": [
                "ShowMapTip"
              ]
            }
          ],
          "pushpinMarkerWidth": 32,
          "offsetX": 0,
          "offsetY": 16,
          "pushpinsRemainVisible": true,
          "pushpinMarkerHeight": 32,
          "pushpinMarkerUri": "Resources/Images/Pushpins/map-marker-red-32.png",
          "pushpinsEnabled": true
        }
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderViewModel",
            "id": "SimpleQueryBuilderViewModel",
            "require": "Mapping/modules/QueryBuilder/SimpleQueryBuilderViewModel"
          },
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderViewModel",
            "id": "SimpleFilterBuilderViewModel",
            "require": "Mapping/modules/QueryBuilder/SimpleQueryBuilderViewModel"
          },
          {
            "id": "ListQueriesViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.ListQueriesViewModel",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/ListQueriesViewModel",
            "configuration": {
              "mode": "query"
            }
          },
          {
            "id": "ListFiltersViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.ListQueriesViewModel",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/ListQueriesViewModel",
            "configuration": {
              "mode": "filter"
            }
          },
          {
            "id": "SaveQueryViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.SaveQueryViewModel",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/SaveQueryViewModel",
            "configuration": {
              "mode": "query"
            }
          },
          {
            "id": "SaveFilterViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.SaveQueryViewModel",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/SaveQueryViewModel",
            "configuration": {
              "mode": "filter"
            }
          },
          {
            "id": "QueryActionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.QueryActionsViewModel",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/QueryActionsViewModel",
            "configuration": {
              "mode": "query"
            }
          },
          {
            "id": "FilterActionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.QueryActionsViewModel",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/QueryActionsViewModel",
            "configuration": {
              "mode": "filter"
            }
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.QueryBuilderModule",
        "moduleName": "QueryBuilder",
        "configuration": {
          "queryStatusRegion": "QueryBuilderStatusRegion",
          "filterStatusRegion": "FilterBuilderStatusRegion"
        },
        "views": [
          {
            "markup": "Mapping/modules/QueryBuilder/SimpleQueryBuilderView.html",
            "viewModelId": "SimpleQueryBuilderViewModel",
            "title": "@language-querybuilder-simple-title",
            "region": "SimpleQueryBuilderContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/query-24.png",
            "configuration": {
              "allowDrawingsAsSpatialFilter": true,
              "doesNotContainQueryFormat": "LOWER({0}) NOT LIKE LOWER({1})",
              "textComparisonQueryFormat": "LOWER({0}) LIKE LOWER({1})",
              "numberToTextComparisonQueryFormat": "CAST({0} AS VARCHAR(50)) LIKE '{1}'",
              "dateQueryFormat": "DATE '{0:yyyy-MM-dd HH:mm:ss}'",
              "queryProviderSupportsTimeOfDay": false,
              "mode": "query",
              "wildcard": "%",
              "numberOfSuggestions": 10,
              "defaultLogicalOperator": "and"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderView",
            "id": "SimpleQueryBuilderView"
          },
          {
            "markup": "Mapping/modules/QueryBuilder/SimpleQueryBuilderView.html",
            "viewModelId": "SimpleFilterBuilderViewModel",
            "title": "@language-querybuilder-simple-filter-title",
            "region": "SimpleFilterBuilderContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "configuration": {
              "allowDrawingsAsSpatialFilter": true,
              "doesNotContainQueryFormat": "LOWER({0}) NOT LIKE LOWER({1})",
              "textComparisonQueryFormat": "LOWER({0}) LIKE LOWER({1})",
              "numberToTextComparisonQueryFormat": "CAST({0} AS VARCHAR(50)) LIKE '{1}'",
              "dateQueryFormat": "DATE '{0:yyyy-MM-dd HH:mm:ss}'",
              "queryProviderSupportsTimeOfDay": false,
              "mode": "filter",
              "wildcard": "%",
              "numberOfSuggestions": 10,
              "defaultLogicalOperator": "and"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderView",
            "id": "SimpleFilterBuilderView",
            "require": "Mapping/modules/QueryBuilder/SimpleQueryBuilderView"
          },
          {
            "id": "ListQueriesView",
            "viewModelId": "ListQueriesViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.ListQueriesView",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/ListQueriesView",
            "markup": "Mapping/modules/QueryBuilder/SavedQueries/ListQueriesView.html",
            "region": "SimpleQueryBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-saved-queries-title",
            "configuration": {}
          },
          {
            "id": "ListFiltersView",
            "viewModelId": "ListFiltersViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.ListQueriesView",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/ListQueriesView",
            "markup": "Mapping/modules/QueryBuilder/SavedQueries/ListQueriesView.html",
            "region": "SimpleFilterBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-saved-filters-title",
            "configuration": {}
          },
          {
            "id": "SaveQueryView",
            "viewModelId": "SaveQueryViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.SaveQueryView",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/SaveQueryView",
            "markup": "Mapping/modules/QueryBuilder/SavedQueries/SaveQueryView.html",
            "region": "SimpleQueryBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-saved-queries-title",
            "configuration": {}
          },
          {
            "id": "SaveFilterView",
            "viewModelId": "SaveFilterViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.SaveQueryView",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/SaveQueryView",
            "markup": "Mapping/modules/QueryBuilder/SavedQueries/SaveQueryView.html",
            "region": "SimpleFilterBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-saved-filters-title",
            "configuration": {}
          },
          {
            "id": "QueryActionsView",
            "viewModelId": "QueryActionsViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.QueryActionsView",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/QueryActionsView",
            "markup": "Mapping/modules/QueryBuilder/SavedQueries/QueryActionsView.html",
            "region": "SimpleQueryBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-saved-queries-title",
            "configuration": {
              "menuId": "QueryActions"
            }
          },
          {
            "id": "FilterActionsView",
            "viewModelId": "FilterActionsViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.QueryActionsView",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/QueryActionsView",
            "markup": "Mapping/modules/QueryBuilder/SavedQueries/QueryActionsView.html",
            "region": "SimpleFilterBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-saved-queries-title",
            "configuration": {
              "menuId": "FilterActions"
            }
          }
        ]
      },
      {
        "viewModels": [
          {
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.ListReportsViewModel",
            "id": "ListReportsViewModel"
          },
          {
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.RunReportViewModel",
            "id": "RunReportViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.ReportingModule",
        "moduleName": "Reporting",
        "configuration": {},
        "views": [
          {
            "viewModelId": "ListReportsViewModel",
            "title": "@language-list-reports-title",
            "region": "DataFrameResultsContainerRegion",
            "id": "ListReportsView",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.ListReportsView",
            "markup": "Mapping/modules/Reporting/ListReportsView.html"
          },
          {
            "viewModelId": "RunReportViewModel",
            "title": "@language-run-report-title",
            "region": "DataFrameResultsContainerRegion",
            "id": "RunReportView",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.RunReportView",
            "markup": "Mapping/modules/Reporting/RunReportView.html"
          }
        ]
      },
      {
        "moduleName": "Results",
        "views": [
          {
            "viewModelId": "ResultsListViewModel",
            "configuration": {
              "automaticDrillInDelay": 300
            },
            "description": "@language-common-query-results",
            "title": "@language-common-results",
            "markup": "Mapping/infrastructure/results/FeatureSetCollectionResultsView.html",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
            "region": "DataFrameResultsContainerRegion",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.FeatureSetCollectionResultsView",
            "id": "ResultsListView"
          },
          {
            "id": "FeatureSetResultsView",
            "viewModelId": "FeatureSetResultsViewModel",
            "libraryId": "Mapping.Infrastructure",
            "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.FeatureSetResultsView",
            "markup": "Mapping/infrastructure/results/FeatureSetResultsView.html",
            "region": "DataFrameResultsContainerRegion",
            "visible": false,
            "title": "@language-common-results",
            "description": "@language-common-query-results",
            "configuration": {
              "contentField": "longDescription",
              "isPaged": true,
              "pageSize": 50,
              "showBackButton": true,
              "highlightMode": "default"
            }
          },
          {
            "markup": "Mapping/infrastructure/results/ResultsTableView.html",
            "viewModelId": "ResultsTableViewModel",
            "configuration": {},
            "region": "ResultsRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsTableView",
            "id": "ResultsTableView"
          }
        ],
        "configuration": {
          "behaviors": [
            {
              "commands": [
                "ShowFeatureDetails"
              ],
              "name": "ResultsListFeatureClickedBehavior",
              "event": "ResultsListFeatureClickedEvent"
            },
            {
              "name": "FeatureSetClickedEventBehavior",
              "event": "FeatureSetClickedEvent",
              "commands": [
                "ShowFeatureSetResultsView"
              ]
            },
            {
              "commands": [
                "ShowFeatureDetails"
              ],
              "name": "ResultsListFeaturePressedBehavior",
              "event": "ResultsListFeaturePressedEvent"
            },
            {
              "commands": [
                "ZoomToFeature"
              ],
              "name": "ResultsTableFeatureClickedBehavior",
              "event": "ResultsTableFeatureClickedEvent"
            },
            {
              "commands": [
                "ZoomToFeature"
              ],
              "name": "ResultsTableFeaturePressedBehavior",
              "event": "ResultsTableFeaturePressedEvent"
            },
            {
              "name": "ResultsListFeatureHoverBehavior",
              "event": "ResultsListFeatureHoveredEvent",
              "commands": [
                "FocusFeature"
              ]
            },
            {
              "name": "ResultsListFeatureHoverEndBehavior",
              "event": "ResultsListFeatureHoverEndedEvent",
              "commands": [
                "ClearFeatureFocus"
              ]
            },
            {
              "name": "ResultsTableFeatureHoverBehavior",
              "event": "ResultsTableFeatureHoveredEvent",
              "commands": [
                "FocusFeature"
              ]
            },
            {
              "name": "ResultsTableFeatureHoverEndBehavior",
              "event": "ResultsTableFeatureHoverEndedEvent",
              "commands": [
                "ClearFeatureFocus"
              ]
            },
            {
              "name": "ResultsViewClosedBehavior",
              "event": "ResultsViewClosedEvent",
              "commands": []
            },
            {
              "name": "ResultsViewCollapsedBehavior",
              "event": "ResultsViewCollapsedEvent",
              "commands": []
            },
            {
              "name": "ResultsPageChangedBehavior",
              "commands": [
                "ClearAndHighlightFeatures"
              ]
            }
          ],
          "resultMappings": {
            "Search": [
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "Selection": [
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "Workflow": [
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "MapTip": [
              "ShowMapTipResults"
            ],
            "QueryBuilder": [
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "Coordinates": [],
            "Identify": [
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "Measurement": [],
            "ClusterFeatures": [
              "ShowMapTipResults",
              "SetCollectionOfInterest"
            ]
          },
          "showInvisibleAttributesOnExport": false,
          "customSearchSuggestions": {
            "Search": "",
            "MapTip": "",
            "Identify": "",
            "QueryBuilder": "",
            "Workflow": ""
          },
          "includeDataLinksOnExport": true,
          "enableDataLinkObjectIdFieldOnExport": true,
          "gcxObjectIdFieldNameOnExport": "GCX_OID"
        },
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsModule",
        "libraryId": "Mapping.Infrastructure",
        "viewModels": [
          {
            "id": "ResultsListViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.FeatureSetCollectionResultsViewModel",
            "configuration": {}
          },
          {
            "id": "FeatureSetResultsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.FeatureSetResultsViewModel",
            "configuration": {}
          },
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.TabbedResultsViewModel",
            "id": "ResultsTableViewModel"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "scaleInputBox": {
                "isEnabled": true,
                "openByDefault": false
              }
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarViewModel",
            "id": "ScalebarViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarModule",
        "moduleName": "Scalebar",
        "configuration": {},
        "views": [
          {
            "viewModelId": "ScalebarViewModel",
            "region": "BottomLeftMapRegion",
            "id": "ScalebarView",
            "visible": true,
            "configuration": {
              "scalebarStyle": "ruler",
              "showBackground": true,
              "scalebarUnit": "metric"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarView",
            "markup": "Mapping/modules/Scalebar/ScalebarView.html"
          },
          {
            "viewModelId": "ScalebarViewModel",
            "region": "BottomLeftMapRegion",
            "id": "ScaleInputBoxButtonView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScaleInputBoxButtonView",
            "markup": "Mapping/modules/Scalebar/ScaleInputBoxButtonView.html"
          },
          {
            "viewModelId": "ScalebarViewModel",
            "region": "BottomLeftMapRegion",
            "id": "ScaleInputBoxView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScaleInputBoxView",
            "markup": "Mapping/modules/Scalebar/ScaleInputBoxView.html"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "minimumPrefixLength": 3,
              "enableSearchRefinement": true,
              "delayConsecutiveSearches": false,
              "minimumPopulateDelay": 300
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchViewModel",
            "id": "SearchViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchModule",
        "moduleName": "Search",
        "configuration": {
          "autoLoadSiteGeocoders": true,
          "searchProviders": [
            {
              "enable": true,
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.LayerQuerySearchProvider"
            },
            {
              "enable": true,
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.InstantSearchProvider",
              "name": "@language-search-instant-provider-name",
              "configuration": {
                "maxHints": 5,
                "precedenceToNearbyResults": true,
                "enableSearchHints": true,
                "maxResults": 50
              },
              "description": "@language-search-instant-provider-description"
            },
            {
              "enable": true,
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchTableSearchProvider"
            }
          ]
        },
        "views": []
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.selection.SaveSelectionViewModel",
            "id": "SaveSelectionViewModel"
          },
          {
            "configuration": {
              "isPaged": true,
              "pageSize": 10
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.selection.ListSelectionsViewModel",
            "id": "ListSelectionsViewModel"
          },
          {
            "configuration": {
              "isPaged": true,
              "pageSize": 10
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.selection.CombineResultsViewModel",
            "id": "CombineResultsViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.selection.SelectionModule",
        "moduleName": "Selection",
        "configuration": {
          "resultsTableStatusRegion": "ResultsStatusRegion",
          "menus": [
            {
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "text": "@language-menu-combine-results-union",
                  "commandParameter": {
                    "currentResults": "{{context}}",
                    "mode": "union"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-add-24.png",
                  "command": "CombineResultsInteractive",
                  "description": "@language-menu-combine-results-union-desc"
                },
                {
                  "text": "@language-menu-combine-results-subtract",
                  "commandParameter": {
                    "currentResults": "{{context}}",
                    "mode": "subtract"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-subtract-24.png",
                  "command": "CombineResultsInteractive",
                  "description": "@language-menu-combine-results-subtract-desc"
                },
                {
                  "text": "@language-menu-combine-results-intersect",
                  "commandParameter": {
                    "currentResults": "{{context}}",
                    "mode": "intersect"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-intersect-24.png",
                  "command": "CombineResultsInteractive",
                  "description": "@language-menu-combine-results-intersect-desc"
                }
              ],
              "id": "CombineResultsActions",
              "description": "@language-menu-combine-results-desc"
            }
          ],
          "resultsListStatusRegion": "DataFrameResultsStatusRegion"
        },
        "views": [
          {
            "viewModelId": "SaveSelectionViewModel",
            "title": "@language-saved-results-save-title",
            "region": "DataFrameResultsContainerRegion",
            "id": "SaveSelectionView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.selection.SaveSelectionView",
            "markup": "Mapping/modules/Selection/SaveSelectionView.html"
          },
          {
            "viewModelId": "ListSelectionsViewModel",
            "title": "@language-saved-results-browse-title",
            "region": "DataFrameResultsContainerRegion",
            "id": "ListSelectionsView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.selection.ListSelectionsView",
            "markup": "Mapping/modules/Selection/ListSelectionsView.html"
          },
          {
            "viewModelId": "CombineResultsViewModel",
            "title": "@language-saved-results-combine-title",
            "region": "DataFrameResultsContainerRegion",
            "id": "CombineResultsView",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.selection.CombineResultsView",
            "markup": "Mapping/modules/Selection/CombineResultsView.html"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "shareOptionIds": []
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.share.ShareViewModel",
            "id": "ShareViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.share.ShareModule",
        "moduleName": "Share",
        "configuration": {
          "shareOptions": [
            {
              "url": "https://www.facebook.com/sharer/sharer.php?u={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/facebook-24.png",
              "displayName": "Facebook",
              "id": "facebook"
            },
            {
              "url": "https://twitter.com/intent/tweet?text={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/twitter-24.png",
              "displayName": "Twitter",
              "id": "twitter"
            },
            {
              "url": "https://www.linkedin.com/shareArticle?ro=false&mini=true&url={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/linkedin-24.png",
              "displayName": "Linkedin",
              "id": "linkedin"
            },
            {
              "url": "https://plus.google.com/up/?continue=https://plus.google.com/share?url={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/google-plus-24.png",
              "displayName": "Google+",
              "id": "googleplus"
            },
            {
              "url": "mailto:?body={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/Toolbar/contact-24.png",
              "displayName": "Email",
              "id": "email"
            }
          ]
        },
        "views": [
          {
            "viewModelId": "ShareViewModel",
            "title": "@language-common-share",
            "region": "ModalWindowRegion",
            "id": "ShareView",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/share-24.png",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.share.ShareView",
            "markup": "Mapping/modules/Share/ShareView.html"
          }
        ]
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.sharingLink.SharingLinkModule",
        "moduleName": "SharingLink",
        "configuration": {
          "sharingLinkProviders": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerThemes.LayerThemeSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayersSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.ExtentSharingLinkProvider",
              "generate": false
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.CenterSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.ScaleSharingLinkProvider"
            }
          ]
        }
      },
      {
        "viewModels": [
          {
            "configuration": {
              "minWidth": 200,
              "dataFrameOpenByDefault": true,
              "dataFrameWidth": 350,
              "bottomRegionHeight": 400,
              "maxWidth": 500
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.LargeShellViewModel",
            "id": "ShellViewModel",
            "require": "Mapping/modules/Shells/LargeShellViewModel"
          },
          {
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "id": "DataFrameViewContainerViewModel",
            "configuration": {
              "defaultViewIcon": "Resources/Images/Icons/Toolbar/search-results-24.png",
              "showHostedViews": false,
              "footerInsertMarkup": "Framework.UI/geocortex/framework/ui/ViewContainer/ButtonTabStripView.html",
              "showHeaderForStandaloneViews": true,
              "showBackButtonAsX": true,
              "ordering": {
                "DataFrameResultsContainerView": 1,
                "HomePanelContainerView": 0
              },
              "headerIsVisible": false,
              "backButtonOnRootView": false,
              "footerInsertType": "geocortex.framework.ui.ViewContainer.ButtonTabStripView",
              "containerRegionName": "DataRegion",
              "resizeX": true
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "id": "DataFrameResultsContainerViewModel",
            "configuration": {
              "showHostedViews": true,
              "ordering": {
                "ResultsListView": 0
              },
              "showBackButtonAsX": true,
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "containerRegionName": "DataFrameResultsContainerRegion",
              "statusRegionName": "DataFrameResultsStatusRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "id": "LayerDataContainerViewModel",
            "configuration": {
              "showHostedViews": true,
              "ordering": {
                "FeatureLayerListView": 4,
                "LegendView": 3,
                "MapServiceActionsView": 1,
                "FeatureLayerDetailsView": 5,
                "LayerListView": 0,
                "LayerActionsView": 2
              },
              "showBackButtonAsX": true,
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "containerRegionName": "LayerDataContainerRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "id": "HomePanelContainerViewModel",
            "configuration": {
              "showHostedViews": true,
              "ordering": {
                "InfoView": 0
              },
              "showBackButtonAsX": false,
              "headerIsVisible": true,
              "backButtonOnRootView": false,
              "containerRegionName": "HomePanelContainerRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "id": "CollaborationContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "CollaborationContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "ordering": {
                "CollaborationView": 0,
                "AfterActionView": 1
              }
            }
          },
          {
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "id": "FeatureEditingContainerViewModel",
            "configuration": {
              "ordering": {
                "TemplatePickerView": 0,
                "AttributeEditorView": 1
              },
              "showBackButtonAsX": true,
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "containerRegionName": "FeatureEditingContainerRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "libraryId": "Framework.UI",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "id": "ModalViewContainerViewModel",
            "configuration": {
              "closeOnEscape": false,
              "showBackButtonAsX": true,
              "backButtonOnRootView": true,
              "containerRegionName": "ModalWindowRegion"
            },
            "require": "geocortex/framework-ui/ViewContainer/ViewContainerViewModel"
          },
          {
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "id": "ResultsRegionViewContainerViewModel",
            "configuration": {
              "ordering": {
                "ResultsTableView": 0
              },
              "showBackButtonAsX": true,
              "showMaximizeButton": true,
              "backButtonOnRootView": true,
              "resizeY": true,
              "containerRegionName": "ResultsRegion",
              "statusRegionName": "ResultsStatusRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "id": "SimpleQueryBuilderViewContainerViewModel",
            "configuration": {
              "showHostedViews": true,
              "ordering": {
                "QueryStatusMessageView": 0,
                "SimpleQueryBuilderView": 1,
                "ListQueriesView": 2,
                "QueryActionsView": 3,
                "SaveQueryView": 4
              },
              "showBackButtonAsX": true,
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "containerRegionName": "SimpleQueryBuilderContainerRegion",
              "statusRegionName": "QueryBuilderStatusRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "id": "SimpleFilterBuilderViewContainerViewModel",
            "configuration": {
              "showHostedViews": true,
              "ordering": {
                "FilterStatusMessageView": 0,
                "SimpleFilterBuilderView": 1,
                "ListFiltersView": 2,
                "FilterActionsView": 3,
                "SaveFilterView": 4
              },
              "showBackButtonAsX": true,
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "containerRegionName": "SimpleFilterBuilderContainerRegion",
              "statusRegionName": "FilterBuilderStatusRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "id": "OfflineMapsContainerViewModel",
            "configuration": {
              "showHostedViews": true,
              "ordering": {
                "ListOfflineMapsView": 0
              },
              "showBackButtonAsX": false,
              "headerIsVisible": true,
              "backButtonOnRootView": false,
              "containerRegionName": "OfflineMapsContainerRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "id": "ProjectContainerViewModel",
            "configuration": {
              "showHostedViews": true,
              "ordering": {},
              "showBackButtonAsX": true,
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "containerRegionName": "ProjectContainerRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "id": "CoordinatesContainerViewModel",
            "configuration": {
              "showHostedViews": true,
              "ordering": {
                "CoordinateActionsView": 1,
                "PlotCoordinatesView": 0
              },
              "showBackButtonAsX": true,
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "containerRegionName": "CoordinatesContainerRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "id": "TimeSliderContainerViewModel",
            "configuration": {
              "showHostedViews": true,
              "ordering": {
                "TimeSliderSettingsView": 0
              },
              "showBackButtonAsX": true,
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "containerRegionName": "TimeSliderContainerRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.WizardPanel.WizardPanelViewModel",
            "id": "LayerAdditionContainerViewModel",
            "configuration": {
              "showHostedViews": false,
              "ordering": {
                "SubLayersDialogView": 3,
                "MapServicesDialogView": 2,
                "AddLayerDialogView": 0,
                "ServiceConnectionsDialogView": 1
              },
              "showBackButtonAsX": true,
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "containerRegionName": "LayerAdditionContainerRegion"
            },
            "require": "geocortex/infrastructure/ui/components/WizardPanel/WizardPanelViewModel"
          },
          {
            "id": "DrawingOrderContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.WizardPanel.WizardPanelViewModel",
            "require": "geocortex/infrastructure/ui/components/WizardPanel/WizardPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "DrawingOrderContainerRegion",
              "containerManagedTitle": "@language-layerDrawingOrder-tabTitle",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": false,
              "ordering": {
                "LayerGroupsView": 0,
                "ServiceDrawingOrderView": 1,
                "LayerDrawingOrderView": 2
              }
            }
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.shells.ShellModule",
        "moduleName": "Shells",
        "configuration": {
          "homePanelVisible": true,
          "css": [
            "Resources/Styles/Custom/common.css",
            "Resources/Styles/Custom/Desktop.css",
            "{ViewerConfigUri}../../Styles/Custom/common.css",
            "{ViewerConfigUri}../../Styles/Custom/Desktop.css"
          ]
        },
        "views": [
          {
            "markup": "Mapping/modules/Shells/DesktopShellView.html",
            "viewModelId": "ShellViewModel",
            "region": "ApplicationRegion",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.LargeShellView",
            "id": "ShellView",
            "require": "Mapping/modules/Shells/LargeShellView"
          },
          {
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "viewModelId": "DataFrameViewContainerViewModel",
            "configuration": {},
            "region": "LeftPanelRegion",
            "visible": false,
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "id": "DataFrameViewContainer",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "markup": "Mapping/modules/Shells/PopupModalView.html",
            "viewModelId": "ModalViewContainerViewModel",
            "configuration": {},
            "region": "ModalWindowPlaceholderRegion",
            "visible": false,
            "libraryId": "Framework.UI",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "id": "ModalViewContainerView",
            "require": "geocortex/framework-ui/ViewContainer/ViewContainerView"
          },
          {
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "viewModelId": "ResultsRegionViewContainerViewModel",
            "configuration": {
              "resizableParentRegion": "BottomPanelRegion",
              "resizeY": true
            },
            "region": "BottomPanelRegion",
            "visible": false,
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "id": "ResultsRegionViewContainerView",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "viewModelId": "FeatureEditingContainerViewModel",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "title": "@language-common-layer-data",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "visible": false,
            "isManaged": true,
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "region": "DataRegion",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "id": "FeatureEditingContainerView",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "viewModelId": "LayerDataContainerViewModel",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "title": "@language-common-layer-data",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "visible": true,
            "isManaged": true,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
            "region": "DataRegion",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "id": "LayerDataContainerView",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "viewModelId": "HomePanelContainerViewModel",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "title": "@language-common-welcome",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "visible": false,
            "isManaged": false,
            "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
            "region": "DataRegion",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "id": "HomePanelContainerView",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "id": "CollaborationContainerView",
            "viewModelId": "CollaborationContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-collaboration",
            "iconUri": "Resources/Images/Icons/collaboration-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            }
          },
          {
            "viewModelId": "DataFrameResultsContainerViewModel",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "title": "@language-common-results",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "visible": false,
            "isManaged": false,
            "iconUri": "Resources/Images/Icons/Toolbar/search-results-24.png",
            "region": "DataRegion",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "id": "DataFrameResultsContainerView",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "viewModelId": "SimpleQueryBuilderViewContainerViewModel",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "title": "@language-querybuilder-simple-title",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "visible": false,
            "isManaged": false,
            "iconUri": "Resources/Images/Icons/query-24.png",
            "region": "DataRegion",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "id": "SimpleQueryBuilderContainerView",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "viewModelId": "SimpleFilterBuilderViewContainerViewModel",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "title": "@language-querybuilder-simple-filter-title",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "visible": false,
            "isManaged": true,
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "region": "DataRegion",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "id": "SimpleFilterBuilderContainerView",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "viewModelId": "OfflineMapsContainerViewModel",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "title": "@language-offline-maps-list-title",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "visible": false,
            "isManaged": true,
            "iconUri": "Resources/Images/Icons/map-offline-24.png",
            "region": "DataRegion",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "id": "OfflineMapsContainerView",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "viewModelId": "ProjectContainerViewModel",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "title": "@language-common-results",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "visible": false,
            "isManaged": false,
            "iconUri": "Resources/Images/Icons/Toolbar/open-24.png",
            "region": "DataRegion",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "id": "ProjectContainerView",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "viewModelId": "CoordinatesContainerViewModel",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "title": "@language-common-results",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "visible": false,
            "isManaged": true,
            "iconUri": "Resources/Images/Icons/Toolbar/coordinates-map-tip-24.png",
            "region": "DataRegion",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "id": "CoordinatesContainerView",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "viewModelId": "TimeSliderContainerViewModel",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "title": "@language-common-results",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "visible": false,
            "isManaged": true,
            "iconUri": "Resources/Images/Icons/Toolbar/hourglass-24.png",
            "region": "DataRegion",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "id": "TimeSliderContainerView",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "viewModelId": "LayerAdditionContainerViewModel",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "visible": false,
            "isManaged": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-add-24.png",
            "region": "DataRegion",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.WizardPanel.WizardPanelView",
            "id": "LayerAdditionContainerView",
            "require": "geocortex/infrastructure/ui/components/WizardPanel/WizardPanelView"
          },
          {
            "id": "DrawingOrderContainerView",
            "viewModelId": "DrawingOrderContainerViewModel",
            "visible": false,
            "isManaged": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-add-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.WizardPanel.WizardPanelView",
            "require": "geocortex/infrastructure/ui/components/WizardPanel/WizardPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            }
          }
        ],
        "require": "Mapping/modules/Shells/ShellModule"
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.ServiceLayersFailureViewModel",
            "id": "ServiceLayersFailureViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.site.SiteModule",
        "moduleName": "Site",
        "configuration": {
          "siteUri": "{ViewerConfigUri}../../../../../.."
        },
        "views": [
          {
            "markup": "Mapping/modules/Site/ServiceLayersFailureView.html",
            "viewModelId": "ServiceLayersFailureViewModel",
            "region": "ModalWindowRegion",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.ServiceLayersFailureView",
            "id": "ServiceLayersFailureView"
          },
          {
            "markup": "Mapping/modules/Site/SignInErrorView.html",
            "region": "ModalWindowRegion",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.SignInErrorView",
            "id": "SignInErrorView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.snapping.SnappingLayerSelectorViewModel",
            "id": "SnappingLayerSelectorViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.snapping.SnappingModule",
        "moduleName": "Snapping",
        "configuration": {
          "behaviors": [
            {
              "commands": [
                "OpenDataFrame"
              ],
              "name": "SelectLayersForSnappingActivatedBehavior",
              "event": "SelectLayersForSnappingActivatedEvent"
            },
            {
              "commands": [
                "CloseDataFrame"
              ],
              "name": "SelectLayersForSnappingDeactivatedBehavior",
              "event": "SelectLayersForSnappingDeactivatedEvent"
            }
          ],
          "radiusFillColor": "#ffffff",
          "snappingProvider": {
            "configuration": {
              "graphicsLayers": [
                "Drawings_measurement",
                "Drawings"
              ]
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.snapping.EsriSnappingProvider"
          },
          "pointSize": "5",
          "radiusFillOpacity": ".2",
          "radiusBorderSize": "1",
          "toggleKey": 70,
          "radiusBorderColor": "#000000",
          "supportedDrawModes": [
            "POINT",
            "MULTI_POINT",
            "LINE",
            "POLYGON",
            "POLYLINE"
          ],
          "threshold": "25",
          "pointColor": "#ffffff"
        },
        "views": [
          {
            "viewModelId": "SnappingLayerSelectorViewModel",
            "title": "@language-snapping-layer-selector-title",
            "markup": "Mapping/modules/LayerSelector/LayerSelectorView.html",
            "visible": false,
            "isManaged": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
            "region": "DataRegion",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.snapping.SnappingLayerSelectorView",
            "id": "SnappingLayerSelectorView"
          }
        ]
      },
      {
        "viewModels": [],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.status.StatusModule",
        "moduleName": "Status",
        "configuration": {
          "busyIcon": "Resources/Images/loader-small.gif"
        },
        "views": [
          {
            "markup": "Mapping/modules/Status/StatusIndicatorView.html",
            "viewModelId": null,
            "region": "BottomCenterMapRegion",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.status.StatusIndicatorView",
            "id": "StatusIndicatorView"
          }
        ]
      },
      {
        "moduleName": "SwitchMap",
        "views": [
          {
            "markup": "Modules/SwitchMap/SwitchMapView.html",
            "viewModelId": "SwitchMapViewModel",
            "region": "BottomLeftMapRegion",
            "visible": false,
            "configuration": {},
            "type": "aam.customModules.switchmap.SwitchMapView",
            "id": "SwitchMapView"
          }
        ],
        "configuration": {},
        "moduleType": "aam.customModules.switchmap.SwitchMapModule",
        "libraryId": "SwitchMap-Custom",
        "viewModels": [
          {
            "configuration": {},
            "type": "aam.customModules.switchmap.SwitchMapViewModel",
            "id": "SwitchMapViewModel"
          }
        ]
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.TabbedToolbarModule",
        "moduleName": "TabbedToolbar",
        "views": [
          {
            "markup": "Mapping/modules/Toolbar/LargeToolbarView.html",
            "viewModelId": "TabbedToolbarViewModel",
            "title": "@language-toolbar-name",
            "region": "ToolbarRegion",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.TabbedToolbarView",
            "id": "TabbedToolbarView",
            "require": "Mapping/modules/Toolbar/TabbedToolbarView"
          },
          {
            "markup": "Mapping/modules/Toolbar/ToolbarButtonView.html",
            "viewModelId": "TabbedToolbarViewModel",
            "region": "TopRightMapRegion",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarButtonView",
            "id": "TabbedToolbarButtonView",
            "require": "Mapping/modules/Toolbar/ToolbarButtonView"
          },
          {
            "markup": "Mapping/modules/Toolbar/Templates/ToolbarFlyoutDropdownTemplate.html",
            "viewModelId": "TabbedToolbarViewModel",
            "title": "@language-toolbar-multi-tool",
            "region": "ToolbarFlyoutDropdown",
            "visible": true,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarFlyoutView",
            "id": "ToolbarFlyoutView",
            "require": "Mapping/modules/Toolbar/ToolbarFlyoutView"
          }
        ],
        "configuration": {
          "toolbarGroups": [
            {
              "items": [
                {
                  "items": [
                    {
                      "hideOnDisable": false,
                      "commandParameter": null,
                      "name": "@language-toolbar-home-sub",
                      "tooltip": "@language-toolbar-navigation-home-tooltip",
                      "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
                      "command": "ActivateHomePanel",
                      "type": "button",
                      "id": "HomeButton"
                    },
                    {
                      "hideOnDisable": false,
                      "commandParameter": null,
                      "name": "@language-toolbar-navigation-initial-extent",
                      "tooltip": "@language-toolbar-navigation-initial-extent-tooltip",
                      "iconUri": "Resources/Images/Icons/Toolbar/zoom-initial-24.png",
                      "command": "ZoomToInitialExtent",
                      "type": "button",
                      "id": "InitialExtentButton"
                    },
                    {
                      "hideOnDisable": false,
                      "name": "@language-toolbar-tasks-identify",
                      "isSticky": false,
                      "tooltip": "@language-toolbar-identify-point-tooltip",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
                      "statusText": "@language-toolbar-identify-point-desc",
                      "command": "Identify",
                      "drawMode": "RECTANGLE",
                      "type": "tool",
                      "id": "PointIdentifyTool-Navigation"
                    },
                    {
                      "type": "region",
                      "id": "IdentifyToolControlRegion",
                      "regionName": "IdentifyToolControlRegion"
                    },
                    {
                      "hideOnDisable": false,
                      "commandParameter": null,
                      "name": "@language-toolbar-tasks-print-map",
                      "tooltip": "@language-toolbar-tasks-print-map-tooltip",
                      "iconUri": "Resources/Images/Icons/Toolbar/print-24.png",
                      "command": "PrintMap",
                      "type": "button",
                      "id": "PrintMapButton"
                    },
                    {
                      "hideOnDisable": false,
                      "commandParameter": null,
                      "name": "@language-toolbar-tasks-export-map",
                      "tooltip": "@language-toolbar-tasks-export-map-tooltip",
                      "iconUri": "Resources/Images/Icons/Toolbar/share-map-24.png",
                      "command": "ShowExportMapDialog",
                      "type": "button",
                      "id": "ExportMapButton"
                    },
                    {
                      "hideOnDisable": false,
                      "commandParameter": "AddPointXY",
                      "name": "Add Coords",
                      "tooltip": "Add Coordinates",
                      "iconUri": "../Images/add-coords-24.png",
                      "command": "RunWorkflowById",
                      "type": "button",
                      "id": "AddCoordsButton"
                    },
                    {
                      "hideOnDisable": false,
                      "commandParameter": "DisplayClickedCoordinates",
                      "name": "Display Coords",
                      "tooltip": "Display Clicked Coordinates",
                      "iconUri": "../Images/display-coords-24.png",
                      "command": "RunWorkflowById",
                      "type": "button",
                      "id": "DisplayCoordsButton"
                    },
                    {
                      "hideOnDisable": false,
                      "commandParameter": "AddData",
                      "name": "Add Data",
                      "tooltip": "Add Data to the Map",
                      "iconUri": "{ViewerConfigUri}../../../Resources/Images/file-add-24.png",
                      "command": "RunWorkflowById",
                      "type": "button",
                      "id": "AddDataButton"
                    },
                    {
                      "hideOnDisable": false,
                      "commandParameter": "ClearData",
                      "name": "Clear Data",
                      "tooltip": "Clear Added Map Data",
                      "iconUri": "../Images/clear-file-add-24.png",
                      "command": "RunWorkflowById",
                      "type": "button",
                      "id": "ClearDataButton"
                    },
                    {
                      "hideOnDisable": false,
                      "commandParameter": "ExtractMarkupToShapefile",
                      "name": "Extract Markup",
                      "tooltip": "Extract Markup To Shapefile",
                      "iconUri": "Resources/Images/Icons/Toolbar/shapefile-export-24.png",
                      "command": "RunWorkflowById",
                      "type": "button",
                      "id": "ExtractMarkupToShapefileButton"
                    }
                  ],
                  "type": "toolbarGroup",
                  "id": "HomeGroup",
                  "layout": "Large",
                  "name": "@language-toolbar-group-home"
                }
              ],
              "type": "toolbarGroup",
              "id": "ToolsTab",
              "isDefault": false,
              "name": "@language-toolbar-group-tools"
            }
          ],
          "isEnabled": false,
          "transientElements": [
            {
              "items": [
                {
                  "toggleStateName": "SnappingState",
                  "toggleOff": {
                    "command": "DeactivateSnapping",
                    "name": "@language-toolbar-snapping-disable",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "type": "toggleButton",
                  "id": "MeasureSnappingToggle",
                  "toggleOn": {
                    "command": "ActivateSnapping",
                    "name": "@language-toolbar-snapping-enable",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  }
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": null,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "type": "button",
                  "id": "MeasureSelectSnappingLayersButton"
                }
              ],
              "region": "MeasurementToolControlRegion",
              "widgetId": "TabbedToolbarTransientBase",
              "stateName": "MeasureState"
            },
            {
              "region": "MeasurementToolControlRegion",
              "widgetId": "MeasurementToolTransientToolbar",
              "stateName": "MeasureState"
            },
            {
              "items": [
                {
                  "toggleStateName": "SnappingState",
                  "toggleOff": {
                    "command": "DeactivateSnapping",
                    "name": "@language-toolbar-snapping-disable",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "type": "toggleButton",
                  "id": "MarkupSnappingToggle",
                  "toggleOn": {
                    "command": "ActivateSnapping",
                    "name": "@language-toolbar-snapping-enable",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  }
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": null,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "type": "button",
                  "id": "MarkupSnappingLayersButton"
                },
                {
                  "id": "ChangeMarkupStyle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png",
                  "toggleStateName": "MarkupStyleToggleState",
                  "toggleOn": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "CreateMarkupStyleView"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "HideMarkupStyleView"
                  }
                }
              ],
              "region": "MarkupEditRegion",
              "widgetId": "TabbedToolbarTransientBase",
              "stateName": "DrawMarkupState"
            },
            {
              "items": [
                {
                  "toggleStateName": "SnappingState",
                  "toggleOff": {
                    "command": "DeactivateSnapping",
                    "name": "@language-toolbar-snapping-disable",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "type": "toggleButton",
                  "id": "EditingSnappingToggle",
                  "toggleOn": {
                    "command": "ActivateSnapping",
                    "name": "@language-toolbar-snapping-enable",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  }
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": null,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "type": "button",
                  "id": "EditingSnappingLayersButton"
                },
                {
                  "id": "ChangeMarkupStyle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png",
                  "toggleStateName": "MarkupStyleToggleState",
                  "toggleOn": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "CreateMarkupStyleView"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "HideMarkupStyleView"
                  }
                }
              ],
              "region": "EditControlRegion",
              "widgetId": "TabbedToolbarTransientBase",
              "stateName": "EditingMarkupState"
            },
            {
              "region": "EditControlRegion",
              "widgetId": "MeasurementToolTransientToolbar",
              "stateName": "EditingMeasurementMarkupState"
            },
            {
              "items": [
                {
                  "toggleStateName": "IdentifyBufferingState",
                  "toggleOff": {
                    "commandParameter": "Identify",
                    "command": "DeactivateBufferingAndDismissOptions",
                    "name": "@language-toolbar-buffering-disable",
                    "tooltip": "@language-toolbar-buffering-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "type": "toggleButton",
                  "id": "IdentifyBufferingToggle",
                  "toggleOn": {
                    "commandParameter": "Identify",
                    "command": "ActivateBufferingAndDisplayOptions",
                    "name": "@language-toolbar-buffering-enable",
                    "tooltip": "@language-toolbar-buffering-alt-enable"
                  }
                },
                {
                  "id": "IdentifyCombineModeUnionToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-add-24.png",
                  "toggleStateName": "IdentifyCombineModeUnionState",
                  "toggleOn": {
                    "name": "@language-toolbar-identify-combine-union-enable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "union",
                    "tooltip": "@language-toolbar-identify-combine-union-enable-tooltip"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-identify-combine-union-disable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "replace",
                    "tooltip": "@language-toolbar-identify-combine-union-disable-tooltip"
                  }
                },
                {
                  "id": "IdentifyCombineModeSubtractToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-subtract-24.png",
                  "toggleStateName": "IdentifyCombineModeSubtractState",
                  "toggleOn": {
                    "name": "@language-toolbar-identify-combine-subtract-enable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "subtract",
                    "tooltip": "@language-toolbar-identify-combine-subtract-enable-tooltip"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-identify-combine-subtract-disable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "replace",
                    "tooltip": "@language-toolbar-identify-combine-subtract-disable-tooltip"
                  }
                },
                {
                  "name": "@language-toolbar-identify-layers-change",
                  "tooltip": "@language-toolbar-identify-layers-change-tooltip",
                  "command": "ActivateSelectLayersForIdentify",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png",
                  "type": "button",
                  "id": "ChangeIdentifiableLayers"
                }
              ],
              "region": "IdentifyToolControlRegion",
              "widgetId": "TabbedToolbarTransientBase",
              "stateName": "IdentifyState"
            },
            {
              "items": [
                {
                  "toggleStateName": "FindDataBufferingState",
                  "toggleOff": {
                    "commandParameter": "Identify",
                    "command": "DeactivateBufferingAndDismissOptions",
                    "name": "@language-toolbar-buffering-disable",
                    "tooltip": "@language-toolbar-buffering-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "type": "toggleButton",
                  "id": "FindDataBufferingToggle",
                  "toggleOn": {
                    "commandParameter": "Identify",
                    "command": "ActivateBufferingAndDisplayOptions",
                    "name": "@language-toolbar-buffering-enable",
                    "tooltip": "@language-toolbar-buffering-alt-enable"
                  }
                },
                {
                  "id": "FindDataCombineModeUnionToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-add-24.png",
                  "toggleStateName": "FindDataCombineModeUnionState",
                  "toggleOn": {
                    "name": "@language-toolbar-identify-combine-union-enable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "union",
                    "tooltip": "@language-toolbar-identify-combine-union-enable-tooltip"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-identify-combine-union-disable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "replace",
                    "tooltip": "@language-toolbar-identify-combine-union-disable-tooltip"
                  }
                },
                {
                  "id": "FindDataCombineModeSubtractToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-subtract-24.png",
                  "toggleStateName": "FindDataCombineModeSubtractState",
                  "toggleOn": {
                    "name": "@language-toolbar-identify-combine-subtract-enable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "subtract",
                    "tooltip": "@language-toolbar-identify-combine-subtract-enable-tooltip"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-identify-combine-subtract-disable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "replace",
                    "tooltip": "@language-toolbar-identify-combine-subtract-disable-tooltip"
                  }
                },
                {
                  "toggleStateName": "SnappingState",
                  "toggleOff": {
                    "command": "DeactivateSnapping",
                    "name": "@language-toolbar-snapping-disable",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "type": "toggleButton",
                  "id": "FindDataSnappingToggle",
                  "toggleOn": {
                    "command": "ActivateSnapping",
                    "name": "@language-toolbar-snapping-enable",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  }
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": null,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "type": "button",
                  "id": "FindDataSnappingLayersButton"
                },
                {
                  "name": "@language-toolbar-identify-layers-change",
                  "tooltip": "@language-toolbar-identify-layers-change-tooltip",
                  "command": "ActivateSelectLayersForIdentify",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png",
                  "type": "button",
                  "id": "ChangeIdentifiableLayers"
                }
              ],
              "region": "FindDataControlRegion",
              "widgetId": "TabbedToolbarTransientBase",
              "stateName": "FindDataState"
            },
            {
              "items": [
                {
                  "commandParameter": {
                    "toolFriendly": true
                  },
                  "name": "@language-toolbar-editing-create-new-feature-geolocation",
                  "tooltip": "@language-toolbar-editing-create-new-feature-geolocation-tooltip",
                  "command": "Geolocate",
                  "iconUri": "Resources/Images/Icons/Toolbar/geolocate.png",
                  "type": "button",
                  "id": "CreateFeatureWithGeolocation"
                }
              ],
              "region": "CreateNewFeatureControlRegion",
              "widgetId": "TabbedToolbarTransientBase",
              "stateName": "FeaturePlacementPointGraphicState"
            },
            {
              "items": [
                {
                  "toggleStateName": "SnappingState",
                  "tooltip": "@language-toolbar-identify-snapping-tooltip",
                  "toggleOff": {
                    "command": "DeactivateSnapping",
                    "name": "@language-toolbar-snapping-disable",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "type": "toggleButton",
                  "id": "FeatureEditingSnappingToggle",
                  "toggleOn": {
                    "command": "ActivateSnapping",
                    "name": "@language-toolbar-snapping-enable",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  }
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": null,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "type": "button",
                  "id": "FeatureEditingSnappingLayersButton"
                }
              ],
              "region": "CreateNewFeatureControlRegion",
              "widgetId": "TabbedToolbarTransientBase",
              "stateName": "FeaturePlacementGraphicState"
            },
            {
              "items": [
                {
                  "toggleStateName": "SnappingState",
                  "toggleOff": {
                    "command": "DeactivateSnapping",
                    "name": "@language-toolbar-snapping-disable",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "type": "toggleButton",
                  "id": "PlotCoordinatesSnappingToggle",
                  "toggleOn": {
                    "command": "ActivateSnapping",
                    "name": "@language-toolbar-snapping-enable",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  }
                },
                {
                  "hideOnDisable": false,
                  "commandParameter": null,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "type": "button",
                  "id": "PlotCoordinatesSnappingLayersButton"
                }
              ],
              "region": "PlotCoordinatesToolControlRegion",
              "widgetId": "TabbedToolbarTransientBase",
              "stateName": "PlotCoordinatesState"
            }
          ]
        },
        "viewModels": [
          {
            "configuration": {
              "toolbarGroupRefs": [
                "ToolsTab"
              ],
              "toolbarOpenByDefault": false
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.TabbedToolbarViewModel",
            "id": "TabbedToolbarViewModel",
            "require": "Mapping/modules/Toolbar/TabbedToolbarViewModel"
          },
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.transients.TransientViewModel",
            "id": "TabbedToolbarTransientViewModel",
            "require": "Mapping/modules/Toolbar/Transients/TransientViewModel"
          }
        ],
        "require": "Mapping/modules/Toolbar/TabbedToolbarModule"
      },
      {
        "viewModels": [
          {
            "configuration": {
              "noOfflineSupportStatusMsgTimeoutSecs": 10,
              "enabled": true,
              "maxTimeExtentDisplayUnits": 3,
              "activateOnStartup": true,
              "animateSlider": true
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.timeSlider.TimeSliderViewModel",
            "id": "TimeSliderViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.timeSlider.TimeSliderModule",
        "moduleName": "TimeSlider",
        "configuration": {
          "behaviors": [
            {
              "commands": [
                "HideTimeSliderSettings",
                "HideTimeSlider"
              ],
              "name": "TimeSliderCloseTimelineActionInvokedBehavior"
            },
            {
              "commands": [
                "ToggleTimeSliderActions",
                "ShowTimeSliderSettings"
              ],
              "name": "TimeSliderMoreSettingsActionInvokedBehavior"
            }
          ]
        },
        "views": [
          {
            "markup": "Mapping/modules/TimeSlider/TimeSliderView.html",
            "viewModelId": "TimeSliderViewModel",
            "region": "TopCenterMapRegion",
            "visible": false,
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.timeSlider.TimeSliderView",
            "id": "TimeSliderView"
          },
          {
            "markup": "Mapping/modules/TimeSlider/TimeSliderSettingsView.html",
            "viewModelId": "TimeSliderViewModel",
            "title": "@language-timeslider-settings-view-heading",
            "region": "TimeSliderContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/hourglass-24.png",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.timeSlider.TimeSliderSettingsView",
            "id": "TimeSliderSettingsView",
            "require": "Mapping/modules/TimeSlider/TimeSliderSettingsView"
          }
        ]
      },
      {
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.tools.ToolsModule",
        "moduleName": "Tools",
        "configuration": {
          "showStatusMessages": true,
          "tools": [
            {
              "name": "EditMarkupTool",
              "isSticky": true,
              "keyboardStatusText": "@language-toolbar-markup-edit-desc-keyboard",
              "iconUri": "Resources/Images/Icons/Toolbar/draw-edit-24.png",
              "statusText": "@language-toolbar-markup-edit-desc",
              "command": "EditMarkup",
              "drawMode": "POINT"
            },
            {
              "name": "DeleteMarkupTool",
              "isSticky": true,
              "keyboardStatusText": "@language-toolbar-markup-delete-desc-keyboard",
              "iconUri": "Resources/Images/Icons/Toolbar/Erase-24.png",
              "statusText": "@language-toolbar-markup-delete-desc",
              "command": "DeleteMarkup",
              "drawMode": "POINT"
            }
          ]
        }
      },
      {
        "viewModels": [
          {
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.UploadDialogViewModel",
            "id": "UploadDialogViewModel",
            "require": "Mapping/modules/UploadData/Dialogs/UploadDialogViewModel"
          },
          {
            "configuration": {
              "sourceSpatialReferences": [
                {
                  "spatialReference": {
                    "wkid": 4326
                  },
                  "preselected": true,
                  "label": "WGS 1984 (WKID 4326)"
                },
                {
                  "spatialReference": {
                    "wkid": 102100
                  },
                  "label": "Web Mercator (WKID 102100)"
                },
                {
                  "map": true,
                  "label": "@language-table-mapping-source-spatial-reference-map"
                },
                {
                  "custom": true,
                  "label": "@language-table-mapping-source-spatial-reference-custom"
                }
              ],
              "autoDetectionTerms": {
                "City": [
                  "city"
                ],
                "Neighborhood": [
                  "neighborhood"
                ],
                "CountryCode": [
                  "countrycode",
                  "country_code",
                  "cc"
                ],
                "yAxis": [
                  "latitude",
                  "lat",
                  "y"
                ],
                "Region": [
                  "region",
                  "state",
                  "province"
                ],
                "PostalExt": [
                  "postalext",
                  "postal_ext"
                ],
                "featureLabel": [
                  "name",
                  "label",
                  "title"
                ],
                "Subregion": [
                  "subregion"
                ],
                "zAxis": [
                  "altitude",
                  "alt",
                  "z"
                ],
                "xAxis": [
                  "longitude",
                  "long",
                  "lon",
                  "x"
                ],
                "Address": [
                  "address",
                  "street"
                ],
                "Postal": [
                  "postal",
                  "zip"
                ],
                "SearchExtent": [
                  "searchextent",
                  "search_extent"
                ]
              }
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.TableMappingDialogViewModel",
            "id": "TableMappingDialogViewModel",
            "require": "Mapping/modules/UploadData/Dialogs/TableMappingDialogViewModel"
          },
          {
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.LayerDetailsDialogViewModel",
            "id": "LayerDetailsDialogViewModel",
            "require": "Mapping/modules/UploadData/Dialogs/LayerDetailsDialogViewModel"
          },
          {
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.TableRecordResultsDialogViewModel",
            "id": "TableRecordResultsDialogViewModel",
            "require": "Mapping/modules/UploadData/Dialogs/TableRecordResultsDialogViewModel"
          },
          {
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.SymbolDialogViewModel",
            "id": "SymbolDialogViewModel",
            "require": "Mapping/modules/UploadData/Dialogs/SymbolDialogViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.UploadDataModule",
        "moduleName": "UploadData",
        "configuration": {
          "checkJobStatusPeriod": 4000,
          "cluster": {
            "userCanToggle": true,
            "maximumFeatures": 100,
            "enabled": false,
            "labelColor": [
              255,
              255,
              255
            ],
            "radius": 50,
            "backgroundColor": [
              0,
              0,
              255
            ]
          },
          "heatMap": {
            "includeInLegend": true,
            "userCanToggle": true,
            "respectScaleRange": true,
            "gradient": [
              [
                255,
                255,
                255,
                0
              ],
              [
                0,
                0,
                255,
                98
              ],
              [
                255,
                0,
                0,
                139
              ],
              [
                255,
                255,
                0,
                181
              ]
            ],
            "enabled": false,
            "intensity": 25,
            "offset": [
              0,
              0.5,
              0.75,
              1
            ]
          },
          "warnOnFeatureCount": 10000
        },
        "views": [
          {
            "viewModelId": "UploadDialogViewModel",
            "title": "@language-upload-dialog-title",
            "region": "ModalWindowRegion",
            "id": "UploadDialogView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.UploadDialogView",
            "markup": "Mapping/modules/UploadData/Dialogs/UploadDialogView.html",
            "require": "Mapping/modules/UploadData/Dialogs/UploadDialogView"
          },
          {
            "viewModelId": "TableMappingDialogViewModel",
            "title": "@language-table-mapping-dialog-title",
            "region": "ModalWindowRegion",
            "id": "TableMappingDialogView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.TableMappingDialogView",
            "markup": "Mapping/modules/UploadData/Dialogs/TableMappingDialogView.html",
            "require": "Mapping/modules/UploadData/Dialogs/TableMappingDialogView"
          },
          {
            "viewModelId": "LayerDetailsDialogViewModel",
            "title": "@language-layer-details-dialog-title",
            "region": "ModalWindowRegion",
            "id": "LayerDetailsDialogView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.LayerDetailsDialogView",
            "markup": "Mapping/modules/UploadData/Dialogs/LayerDetailsDialogView.html",
            "require": "Mapping/modules/UploadData/Dialogs/LayerDetailsDialogView"
          },
          {
            "viewModelId": "TableRecordResultsDialogViewModel",
            "title": "@language-table-record-results-dialog-title",
            "region": "ModalWindowRegion",
            "id": "TableRecordResultsDialogView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.TableRecordResultsDialogView",
            "markup": "Mapping/modules/UploadData/Dialogs/TableRecordResultsDialogView.html",
            "require": "Mapping/modules/UploadData/Dialogs/TableRecordResultsDialogView"
          },
          {
            "viewModelId": "SymbolDialogViewModel",
            "title": "@language-symbol-dialog-title",
            "region": "ModalWindowRegion",
            "id": "SymbolDialogView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.SymbolDialogView",
            "markup": "Mapping/modules/UploadData/Dialogs/SymbolDialogView.html",
            "require": "Mapping/modules/UploadData/Dialogs/SymbolDialogView"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {
              "linkColor": "#1A72C4"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.SignInViewModel",
            "id": "SignInViewModel"
          },
          {
            "configuration": {
              "textColor": "#333333",
              "linkColor": "#1A72C4",
              "backgroundColor": "#FFFFFF"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserInfoViewModel",
            "id": "UserInfoViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserModule",
        "moduleName": "User",
        "configuration": {},
        "views": []
      },
      {
        "viewModels": [
          {
            "configuration": {
              "defaultDisplayName": "@language-visualization-none",
              "containerTitle": "@language-visualization-title",
              "visualizationProviders": [
                {
                  "displayName": "@language-heat-maps-name",
                  "viewId": "HeatMapsView",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.heatMaps.HeatMapVisualizationProvider"
                },
                {
                  "displayName": "@language-clustering-name",
                  "viewId": "ClusterLayerView",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.clusterLayers.ClusterLayerVisualizationProvider"
                },
                {
                  "displayName": "@language-layerstyles-name",
                  "viewId": "LayerStyleSelectorView",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerStyles.CustomLayerStylesVisualizationProvider"
                },
                {
                  "displayName": "@language-layerstyles-custom-name",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerStyles.LayerStylesVisualizationProvider"
                }
              ],
              "containerRegionName": "LayerVisualizationRegion"
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.visualization.VisualizationViewModel",
            "id": "VisualizationViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.visualization.VisualizationModule",
        "moduleName": "Visualization",
        "configuration": {},
        "views": [
          {
            "viewModelId": "VisualizationViewModel",
            "region": "LayerDataContainerRegion",
            "id": "VisualizationView",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/visualizations-24.png",
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.visualization.VisualizationView",
            "markup": "Mapping/modules/Visualization/VisualizationView.html"
          }
        ]
      },
      {
        "viewModels": [
          {
            "configuration": {},
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowViewModel",
            "id": "WorkflowViewModel"
          }
        ],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowModule",
        "moduleName": "Workflow",
        "configuration": {
          "defaultContainerIconUri": "Resources/Images/Icons/Toolbar/workflow-24.png",
          "startupWorkflows": [
            "StartupLoadMapExtentAndGraphicsHTML"
          ],
          "icons": {
            "Resources/Images/ParcelByID.png": "Resources/Images/Icons/Toolbar/house-number-24.png",
            "Resources/Images/ParcelByOwner.png": "Resources/Images/Icons/Toolbar/house-owner-24.png",
            "Resources/Images/ParcelByValue.png": "Resources/Images/Icons/Toolbar/house-value-24.png",
            "Resources/Images/SearchSchools.png": "Resources/Images/Icons/Toolbar/school-24.png"
          },
          "formItems": {},
          "defaultContainerRegionName": "DataRegion",
          "showCaptureStatusMessages": true,
          "defaultContainerTitle": "@language-workflow-title",
          "displayResultPickerTemplateComplexity": "complex",
          "showTitleInFormBody": false,
          "containers": [
            {
              "regionName": "DataRegion",
              "name": "Default",
              "title": "@language-workflow-title"
            },
            {
              "allowClose": false,
              "regionName": "DataRegion",
              "name": "DefaultNoCloseButton",
              "title": "@language-workflow-title"
            },
            {
              "regionName": "DataRegion",
              "iconUri": "Resources/Images/Icons/Toolbar/layers-extract-24.png",
              "name": "Extract",
              "title": "@language-common-extract-data"
            },
            {
              "regionName": "ModalWindowRegion",
              "name": "ModalWindow",
              "title": "@language-workflow-title"
            },
            {
              "allowClose": false,
              "regionName": "ModalWindowRegion",
              "name": "ModalWindowNoCloseButton",
              "title": "@language-workflow-title"
            }
          ]
        },
        "views": [
          {
            "viewModelId": "WorkflowViewModel",
            "description": "@language-workflow-site-workflows",
            "title": "@language-workflow-workflows",
            "markup": "Mapping/modules/Workflow/WorkflowListView.html",
            "showBackButtonAsX": true,
            "visible": false,
            "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
            "region": "DataRegion",
            "configuration": {
              "hideOnClickWorkflow": false
            },
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowListView",
            "id": "WorkflowListView"
          }
        ]
      },
      {
        "viewModels": [],
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomControlModule",
        "moduleName": "ZoomControl",
        "configuration": {},
        "views": []
      },
      {
        "moduleName": "SkipLinks",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.SkipLinks.SkipLinksModule",
        "configuration": {
          "menus": [
            {
              "id": "SkipLinksActions",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
                  "text": "@language-skip-links-side-panel",
                  "description": "@language-skip-links-side-panel-desc",
                  "command": "OpenAndFocusDataFrame",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
                  "text": "@language-skip-links-search",
                  "description": "@language-skip-links-search-desc",
                  "command": "FocusSearch",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "text": "@language-skip-links-i-want-to-menu",
                  "description": "@language-skip-links-i-want-to-desc",
                  "command": "OpenAndFocusIWantToMenu",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/tools-24.png",
                  "text": "@language-skip-links-toolbar",
                  "description": "@language-skip-links-toolbar-desc",
                  "command": "OpenAndFocusToolbar",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/map-24.png",
                  "text": "@language-skip-links-map",
                  "description": "@language-skip-links-map-desc",
                  "command": "FocusMap",
                  "commandParameter": null,
                  "hideOnDisable": true
                }
              ]
            }
          ]
        },
        "views": [
          {
            "id": "SkipLinksView",
            "viewModelId": "SkipLinksViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.SkipLinks.SkipLinksView",
            "markup": "Mapping/modules/SkipLinks/SkipLinksView.html",
            "region": "TopShellRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "SkipLinksViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.SkipLinks.SkipLinksViewModel",
            "configuration": {}
          }
        ]
      }
    ],
    "libraries": [
      {
        "id": "Framework.UI",
        "locales": [
          {
            "locale": "en-AU",
            "uri": "Resources/Locales/Framework.UI.en-AU.json.js"
          },
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Framework.UI.en-US.json.js"
          },
          {
            "locale": "inv",
            "uri": "Resources/Locales/Framework.UI.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping.Infrastructure",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.Infrastructure.en-US.json.js"
          },
          {
            "locale": "inv",
            "uri": "Resources/Locales/Mapping.Infrastructure.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping",
        "locales": [
          {
            "locale": "en-AU",
            "uri": "Resources/Locales/Mapping.en-AU.json.js"
          },
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.en-US.json.js"
          },
          {
            "locale": "inv",
            "uri": "Resources/Locales/Mapping.en-US.json.js"
          }
        ],
        "async": true,
        "location": "Resources/Compiled"
      },
      {
        "id": "Charting",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Charting.en-US.json.js"
          },
          {
            "locale": "inv",
            "uri": "Resources/Locales/Charting.en-US.json.js"
          }
        ],
        "uri": "Resources/Compiled/Charting.js"
      },
      {
        "id": "Mapping.Charting",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.Charting.en-US.json.js"
          },
          {
            "locale": "inv",
            "uri": "Resources/Locales/Mapping.Charting.en-US.json.js"
          }
        ],
        "uri": "Resources/Compiled/Mapping.Charting.js"
      },
      {
        "id": "SwitchMap-Custom",
        "uri": "Libraries/Compiled/Custom/SwitchMap-Custom.js"
      }
    ],
    "application": {
      "offlineStorageSpaceMb": "50",
      "geometryServiceUrl": "http://test-data.actmapi.act.gov.au/arcgis/rest/services/Utilities/Geometry/GeometryServer",
      "allowUnsafeContent": false,
      "proxyUri": "proxy.ashx?"
    },
    "version": "2.10",
    "defaultLibraryId": "Mapping",
    "widgets": [
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/AutoCompleteBoxFormItemView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.AutoCompleteBoxFormItemView",
        "id": "AutoCompleteBoxFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "ColorPickerWidget",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.ColorPickerWidget",
        "markup": "Mapping/infrastructure/ui/components/ColorPicker/ColorPickerWidget.html",
        "configuration": {
          "provider": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.KendoColorPickerProvider"
        }
      },
      {
        "id": "NumericInputWidget",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.NumericInputWidget",
        "markup": "Mapping/infrastructure/ui/components/NumericInput/NumericInputWidget.html",
        "configuration": {
          "provider": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.KendoSliderProvider"
        }
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/CheckBoxFormItemView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.CheckBoxFormItemView",
        "id": "CheckBoxFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/ComboBoxFormItemView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.ListBoxFormItemView",
        "id": "ComboBoxFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/ContainerFormItemView.html",
        "configuration": {
          "allowHorizontal": true
        },
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.ContainerFormItemView",
        "id": "ContainerFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/DatePickerFormItemView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.DatePickerFormItemView",
        "id": "DatePickerFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/FilePickerFormItemView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.FilePickerFormItemView",
        "id": "FilePickerFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/GroupBoxFormItemView.html",
        "configuration": {
          "allowHorizontal": true
        },
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.GroupBoxFormItemView",
        "id": "GroupBoxFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/HyperlinkFormItemView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.HyperlinkFormItemView",
        "id": "HyperlinkFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/ImageFormItemView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.FormItemViewBase",
        "id": "ImageFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/LabelFormItem.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.FormItemViewBase",
        "id": "LabelFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/ListBoxFormItemView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.ListBoxFormItemView",
        "id": "ListBoxFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/MarkdownFormItemView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.MarkdownFormItemView",
        "id": "MarkdownFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/RadioButtonFormItemView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.RadioButtonFormItemView",
        "id": "RadioButtonFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/TextAreaFormItemView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.TextEntryFormItemView",
        "id": "TextAreaFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/TextBoxFormItemView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.TextEntryFormItemView",
        "id": "TextBoxFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "SimpleSymbolWidget",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.SimpleSymbolWidget",
        "markup": "Mapping/infrastructure/symbology/widgets/SimpleSymbolWidget.html",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.SimpleSymbolWidgetViewModel",
        "libraryId": "Mapping.Infrastructure",
        "configuration": {
          "userSelectedOutlineColor": true,
          "lineWidth": {
            "min": 0,
            "max": 12,
            "value": 2,
            "step": 1
          },
          "markerSize": {
            "min": 1,
            "max": 64,
            "value": 16,
            "step": 1
          }
        }
      },
      {
        "id": "PictureSymbolWidget",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.PictureSymbolWidget",
        "markup": "Mapping/infrastructure/symbology/widgets/PictureSymbolWidget.html",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.PictureSymbolWidgetViewModel",
        "libraryId": "Mapping.Infrastructure",
        "configuration": {
          "imageLibraries": [
            "Shapes",
            "Arrows",
            "A-Z",
            "Basic",
            "Business",
            "Cartographic",
            "Damage",
            "Disasters",
            "General Infrastructure",
            "National Park Service",
            "Numbers",
            "Outdoor Recreation",
            "People Places",
            "Points Of Interest",
            "Safety Health",
            "Transportation",
            "Emergency Management",
            "Local Government",
            "State Government"
          ],
          "imageSize": {
            "min": 16,
            "max": 64,
            "value": 32,
            "step": 1
          }
        }
      },
      {
        "markup": "Mapping/infrastructure/ui/components/Forms/TimePickerFormItemView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.TimePickerFormItemView",
        "id": "TimePickerFormItem",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "markup": "Mapping/modules/Measurement/MeasurementView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementView",
        "id": "MeasurementToolTransientToolbar",
        "viewModelId": "MeasurementViewModel"
      },
      {
        "id": "TextSymbolWidget",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.TextSymbolWidget",
        "markup": "Mapping/infrastructure/symbology/widgets/TextSymbolWidget.html",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.TextSymbolWidgetViewModel",
        "libraryId": "Mapping.Infrastructure",
        "configuration": {
          "fontFamilies": [
            "Arial",
            "Calibri",
            "Cambria",
            "Century Gothic",
            "Consolas",
            "Courier",
            "Georgia",
            "Impact",
            "Tahoma",
            "Times New Roman",
            "Verdana"
          ],
          "fontSize": {
            "min": 10,
            "max": 72,
            "value": 16,
            "step": 1
          },
          "haloSize": {
            "min": 0,
            "max": 5,
            "value": 2,
            "step": 1
          }
        }
      },
      {
        "markup": "Mapping/modules/Basemap/BasemapSwitcherViewControllerView.html",
        "configuration": {
          "grid": {
            "numberOfColumns": 4,
            "numberOfRows": 1
          }
        },
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherViewControllerView",
        "id": "BasemapsListController"
      },
      {
        "markup": "Mapping/modules/Identify/IdentifyOptionsView.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyOptionsView",
        "id": "IdentifyOptionsTransientToolbar",
        "viewModelId": "IdentifyOptionsViewModel"
      },
      {
        "markup": "Mapping/modules/Toolbar/Templates/TransientItems.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.transients.TransientView",
        "id": "CompactToolbarTransientBase",
        "viewModelId": "CompactToolbarTransientViewModel"
      },
      {
        "markup": "Mapping/modules/Toolbar/Templates/TransientItems.html",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.transients.TransientView",
        "id": "TabbedToolbarTransientBase",
        "viewModelId": "TabbedToolbarTransientViewModel"
      },
      {
        "configuration": {},
        "markup": "Mapping/modules/UploadData/Widgets/Uploader/UploaderView.html",
        "libraryId": "Mapping",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.widgets.uploader.UploaderView",
        "id": "Uploader",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.widgets.uploader.UploaderViewModel"
      },
      {
        "configuration": {
          "defaultPointColor": [
            150,
            150,
            150,
            0.8
          ],
          "defaultPointSize": 12,
          "defaultLineColor": [
            75,
            75,
            75,
            1
          ],
          "defaultLineWidth": 2,
          "defaultFillColor": [
            150,
            150,
            150,
            0.3
          ],
          "maxSamples": 1000,
          "maxRenderClasses": 12,
          "transparency": {
            "min": 0,
            "max": 90,
            "value": 10,
            "step": 5
          },
          "classSymbolizationConfig": {
            "enableImageSelector": true,
            "symbologyConfig": {
              "userSelectedOutlineColor": false,
              "adaptOutlineToFill": false,
              "markerSize": {
                "min": 12,
                "max": 64,
                "value": 16,
                "step": 1
              }
            },
            "pictureSymbologyConfig": {}
          }
        },
        "markup": "Mapping/infrastructure/symbology/AttributeSymbologySettingsView.html",
        "libraryId": "Mapping.Infrastructure",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.AttributeSymbologySettingsView",
        "id": "AttributeSymbologySettings",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.AttributeSymbologySettingsViewModel"
      },
      {
        "markup": "Mapping/infrastructure/symbology/SymbologySettingsView.html",
        "libraryId": "Mapping.Infrastructure",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.SymbologySettingsView",
        "id": "SymbologySettings",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.SymbologySettingsViewModel",
        "configuration": {
          "enableImageSelector": true
        }
      },
      {
        "id": "SymbolEditor",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.SymbolEditorView",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.SymbolEditorViewModel",
        "markup": "Mapping/infrastructure/symbology/SymbolEditorView.html",
        "libraryId": "Mapping.Infrastructure",
        "configuration": {}
      }
    ]
  }
}