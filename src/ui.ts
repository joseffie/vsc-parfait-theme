import { Theme } from './typing';

export default function ui(theme: Theme, hc?: boolean): unknown {
  return {
    contrastBorder: theme.ui.uiborder,

    // ActivityBar
    'activityBar.background': theme.ui.uibackgroundalt,
    'activityBar.border': theme.ui.uiborder,
    'activityBar.foreground': theme.ui.primary,
    'activityBar.inactiveForeground': `${theme.ui.defaultalt}AA`,
    'activityBarBadge.background': theme.ui.primary,
    'activityBarBadge.foreground': theme.ui.uibackgroundalt,

    // Badge
    'badge.background': theme.ui.primary,
    'badge.foreground': theme.ui.uibackground,

    // Breadcrumbs
    'breadcrumb.background': theme.ui.uibackground,
    'breadcrumbPicker.background': theme.ui.uibackground,

    // Button
    'button.background': `${theme.ui.primary}75`,
    'button.foreground': hc ? theme.ui.uibackgroundalt : theme.ui.default,
    'button.hoverBackground': `${theme.ui.primary}90`,
    'button.secondaryBackground': `${theme.ui.primary}20`,
    'button.secondaryForeground': theme.ui.default,
    'button.secondaryHoverBackground': `${theme.ui.primary}35`,
    'extensionButton.prominentBackground': `${theme.ui.primary}9d`,
    'extensionButton.prominentForeground': theme.ui.uibackgroundalt,
    'extensionButton.prominentHoverBackground': theme.ui.primary,

    // Charts
    'charts.foreground': theme.ui.default,
    'charts.lines': theme.ui.default,
    'charts.red': theme.colors.red,
    'charts.blue': theme.colors.blue,
    'charts.yellow': theme.colors.yellow,
    'charts.orange': theme.colors.orange,
    'charts.green': theme.colors.green,
    'charts.purple': theme.colors.pink,

    // Common
    contrastActiveBorder: '#00000000',
    errorForeground: theme.levels.danger,
    'errorLens.hintForeground': theme.levels.info + 99,
    'errorLens.infoForeground': theme.levels.info + 99,
    'errorLens.errorForeground': theme.levels.danger + 99,
    'errorLens.warningForeground': theme.levels.warning + 99,
    focusBorder: `${theme.ui.primary}40`,
    foreground: `${theme.ui.defaultMain}AA`,
    'icon.foreground': `${theme.ui.defaultMain}AA`,
    'selection.background': `${theme.ui.primary}60`,
    'widget.shadow': `${theme.ui.uiborder}30`,

    // Command Center
    'commandCenter.border': theme.ui.uiborder,
    'commandCenter.background': theme.ui.uibackground,
    'commandCenter.activeBackground': `${theme.ui.primaryalt}60`,
    'commandCenter.activeForeground': `${theme.ui.defaultMain}90`,
    'commandCenter.foreground': theme.ui.defaultalt,

    // Checkbox
    'checkbox.foreground': theme.ui.default,

    // Debug
    'debugExceptionWidget.background': theme.ui.primaryalt,
    'debugExceptionWidget.border': theme.ui.uiborder,
    'debugToolBar.background': theme.ui.primaryalt,
    'toolbar.hoverBackground': hc
      ? theme.ui.defaultMain + 40
      : theme.ui.defaultalt + 60,

    // Description
    descriptionForeground: theme.ui.default,

    // Diff
    'diffEditor.border': theme.ui.uiborder,
    'diffEditor.insertedTextBackground': hc
      ? '#00000000'
      : `${theme.levels.success}20`,
    'diffEditor.removedTextBackground': hc
      ? '#00000000'
      : `${theme.levels.danger}25`,
    'diffEditor.diagonalFill': `${theme.ui.uiborder}80`,
    'diffEditor.insertedTextBorder': hc && `${theme.levels.success}30`,
    'diffEditor.removedTextBorder': hc && `${theme.levels.danger}40`,
    'diffEditorGutter.insertedLineBackground': '#00000000',
    'diffEditorGutter.removedLineBackground': '#00000000',
    'diffEditor.insertedLineBackground': hc && `${theme.levels.success}20`,
    'diffEditor.removedLineBackground': hc && `${theme.levels.danger}25`,
    'diffEditorOverview.insertedForeground': hc && `${theme.levels.success}25`,
    'diffEditorOverview.removedForeground': hc && `${theme.levels.danger}30`,

    // Inlay Hints
    'editorInlayHint.background': theme.ui.defaultMain + 20,
    'editorInlayHint.foreground': theme.ui.defaultMain + '90',
    'editorInlayHint.typeBackground': theme.colors.purple + 30,
    'editorInlayHint.typeForeground': theme.colors.purple + 'aa',

    // Editor
    'editorGhostText.border': '#00000000',
    'editorGhostText.foreground': theme.colors.green + 70,
    'editorGhostText.background': theme.colors.green + 10,
    'editorCursor.background': theme.ui.primary,
    'editorBracketHighlight.foreground1': theme.colors.yellow,
    'editorBracketHighlight.foreground2': theme.colors.purple,
    'editorBracketHighlight.foreground3': theme.colors.blue,
    'editor.background': theme.ui.uibackground,
    'editor.findMatchBackground': `${theme.ui.primary}20`,
    'editor.findMatchBorder': `${theme.ui.primary}60`,
    'editor.findMatchHighlightBackground': `${theme.ui.primary}20`,
    // "dart.closingLabels": theme.ui.primary + "dd",
    'dart.closingLabels': theme.ui.defaultMain + 'aa',
    'editor.findMatchHighlightBorder': `${theme.ui.primary}40`,
    'editor.foreground': theme.ui.default,
    'editor.hoverHighlightBackground': `${theme.ui.primary}40`,
    'editor.lineHighlightBackground': `${theme.ui.primary}0c`,
    'editor.lineHighlightBorder': `${theme.ui.primary}1a`,
    'editor.rangeHighlightBackground': `${theme.ui.primary}20`,
    'editor.selectionBackground': `${theme.ui.primary}25`,
    'editor.selectionForeground': theme.ui.primary,
    'editor.inactiveSelectionBackground': `${theme.ui.primary}20`,
    'editor.selectionHighlightBorder': `${theme.ui.primary}60`,
    'editor.selectionHighlightBackground': '#00000000',
    'editor.wordHighlightStrongBackground': `${theme.ui.primary}40`,
    'editor.wordHighlightBackground': `${theme.ui.primary}20`,
    'editorBracketMatch.background': `${theme.ui.primary}20`,
    'editorBracketMatch.border': `${theme.ui.primary}40`,
    'editorCodeLens.foreground': theme.ui.default,
    'editorCursor.foreground': theme.colors.yellow,
    'editorGroup.border': theme.ui.uiborder,
    'editorGroup.dropBackground': `${theme.ui.primary}15`,
    'editorHoverWidget.background': theme.ui.primaryalt,
    'editorHoverWidget.border': theme.ui.uiborder,
    'editorIndentGuide.background': hc
      ? `${theme.ui.defaultalt}70`
      : `${theme.ui.defaultalt}30`,
    'editorIndentGuide.activeBackground': hc
      ? theme.ui.defaultalt
      : `${theme.ui.defaultalt}bb`,
    'editorLink.activeForeground': theme.ui.default,
    'editorWarning.border': hc && '#00000000',
    'editorInfo.border': hc && '#00000000',
    'editorGutter.commentRangeForeground': theme.ui.primaryalt,
    'sash.hoverBorder': `${theme.ui.primary}50`,
    'editorRuler.foreground': `${theme.ui.uiborder}40`,

    // Find
    'editorWarning.foreground': theme.colors.yellow,
    'editorWhitespace.foreground': `${theme.ui.defaultalt}60`,
    'editorWidget.background': theme.ui.primaryalt,
    'editorWidget.resizeBorder': `${theme.ui.primary}50`,

    // Gutter
    'editorGutter.background': theme.ui.uibackground,
    'editorGutter.addedBackground': `${theme.levels.success}cc`,
    'editorGutter.deletedBackground': `${theme.levels.danger}cc`,
    'editorGutter.modifiedBackground': `${theme.levels.info}cc`,
    'editorLineNumber.foreground': `${
      hc ? theme.ui.defaultalt : theme.ui.defaultalt + 90
    }`,
    'editorLineNumber.activeForeground': theme.ui.defaultalt,

    // Dropdown
    'dropdown.background': theme.ui.uibackground,
    'dropdown.listBackground': theme.ui.uibackground,
    'dropdown.foreground': theme.ui.default,
    'dropdown.border': `${theme.ui.defaultalt}50`,

    // Input
    'input.background': '#00000000',
    'input.foreground': theme.ui.default,
    'input.border': `${theme.ui.defaultalt}50`,
    'input.placeholderForeground': `${theme.ui.default}60`,
    'inputOption.activeBorder': theme.ui.primary,
    'inputValidation.errorBackground': theme.ui.primaryalt,
    'inputValidation.errorBorder': theme.colors.yellow,
    'inputValidation.infoBackground': theme.ui.primaryalt,
    'inputValidation.infoBorder': theme.ui.primary,
    'inputValidation.warningBackground': theme.ui.primaryalt,
    'inputValidation.warningBorder': theme.colors.yellow,

    // List
    'list.dropBackground': `${theme.ui.primary}15`,
    'list.focusBackground': `${theme.ui.primary}40`,
    'list.focusForeground': theme.ui.defaultMain,
    'list.errorForeground': theme.levels.danger,
    'list.warningForeground': theme.levels.warning,
    'list.highlightForeground': theme.colors.yellow,
    'list.activeSelectionForeground': theme.ui.default,
    'list.activeSelectionBackground': hc
      ? theme.ui.primary + 30
      : theme.ui.defaultalt + 30,
    'list.inactiveSelectionBackground': hc
      ? theme.ui.primary + 30
      : theme.ui.defaultalt + 30,
    'list.hoverBackground': hc
      ? theme.ui.primary + 15
      : theme.ui.defaultalt + 15,
    'list.hoverForeground': theme.ui.default,
    'gitDecoration.modifiedResourceForeground': theme.levels.info,
    'gitDecoration.deletedResourceForeground': theme.levels.danger,
    'gitDecoration.untrackedResourceForeground': theme.levels.success,
    'gitDecoration.ignoredResourceForeground': theme.ui.defaultalt,
    'gitDecoration.conflictingResourceForeground': theme.ui.primary,

    // Menu
    'menu.background': theme.ui.primaryalt,
    'menu.foreground': theme.ui.defaultMain,
    'menu.separatorBackground': theme.ui.uiborder,
    'menu.selectionForeground': theme.ui.defaultMain,
    'menubar.selectionBackground': theme.ui.primaryalt,
    'menubar.selectionForeground': theme.ui.defaultMain,
    'menu.border': theme.ui.uiborder,

    // Merge
    'merge.border': theme.ui.uiborder,
    'merge.commonContentBackground': `${theme.colors.yellow}30`,
    'merge.commonHeaderBackground': `${theme.colors.yellow}80`,
    'merge.currentContentBackground': `${theme.levels.success}30`,
    'merge.currentHeaderBackground': `${theme.levels.success}80`,
    'merge.incomingContentBackground': `${theme.levels.info}30`,
    'merge.incomingHeaderBackground': `${theme.levels.info}80`,
    'editorOverviewRuler.border': theme.ui.uiborder,
    'editorOverviewRuler.commonContentForeground': theme.colors.yellow,
    'editorOverviewRuler.currentContentForeground': theme.levels.danger,
    'editorOverviewRuler.incomingContentForeground': theme.levels.success,

    // Notification
    'notificationCenterHeader.foreground': theme.ui.default,
    'notificationCenterHeader.background': theme.ui.primaryalt,
    'notifications.foreground': theme.ui.defaultMain,
    'notifications.background': theme.ui.primaryalt,
    'notifications.border': theme.ui.uiborder,
    'notificationLink.foreground': theme.colors.yellow,
    'notificationsErrorIcon.foreground': theme.colors.red,
    'notificationsWarningIcon.foreground': theme.colors.orange,
    'notificationsInfoIcon.foreground': theme.colors.blue,

    // Panel
    'panel.background': theme.ui.uibackground,
    'panel.border': theme.ui.uiborder,
    'panelInput.border': theme.ui.defaultalt,
    'panelSection.border': theme.ui.uiborder,
    'panelTitle.activeBorder': theme.ui.primary,
    'panelTitle.activeForeground': theme.ui.primary,
    'panelTitle.inactiveForeground': theme.ui.defaultalt,
    'panelSectionHeader.background': `${theme.ui.defaultalt}20`,
    'panelSectionHeader.foreground': theme.ui.default,
    'panelSectionHeader.border': theme.ui.uiborder,

    // PeekView
    'peekView.border': theme.ui.primary,
    'peekViewEditor.background': `${theme.ui.primaryalt}40`,
    'peekViewEditor.matchHighlightBackground': `${theme.ui.primaryalt}40`,
    'peekViewResult.background': `${theme.ui.primaryalt}40`,
    'peekViewResult.fileForeground': theme.ui.default,
    'peekViewResult.lineForeground': theme.ui.default,
    'peekViewResult.matchHighlightBackground': theme.ui.primaryalt,
    'peekViewResult.selectionBackground': theme.ui.primaryalt,
    'peekViewResult.selectionForeground': theme.ui.default,
    'peekViewTitle.background': theme.ui.uiborder,
    'peekViewTitleDescription.foreground': theme.ui.default,
    'peekViewTitleLabel.foreground': theme.ui.default,
    'peekViewEditorGutter.background': `${theme.ui.primaryalt}40`,
    'editorMarkerNavigation.background': theme.ui.uibackgroundalt,
    'editorMarkerNavigationError.background': `${theme.levels.danger}90`,
    'editorMarkerNavigationWarning.background': `${theme.levels.warning}90`,
    'editorMarkerNavigationInfo.background': `${theme.levels.info}90`,
    'editorError.border': '#00000000',
    'editorError.foreground': theme.levels.danger,

    // Picker
    'pickerGroup.border': theme.ui.uiborder,
    'pickerGroup.foreground': theme.ui.default,

    // ProgressBar
    'progressBar.background': theme.colors.yellow,

    // Scrollbar
    'scrollbar.shadow': `${theme.ui.uiborder}80`,
    'scrollbarSlider.activeBackground': `${theme.ui.primary}40`,
    'scrollbarSlider.background': `${theme.ui.primary}20`,
    'scrollbarSlider.hoverBackground': `${theme.ui.primary}30`,

    // Settings
    'settings.modifiedItemIndicator': theme.ui.primary,
    'settings.headerForeground': theme.ui.primary,

    'keybindingLabel.foreground': hc && theme.ui.primary,
    'keybindingLabel.border': hc && theme.ui.primary + 60,
    'keybindingLabel.bottomBorder': hc && theme.ui.primary + 60,

    // Sidebar
    'sideBar.background': theme.ui.uibackgroundalt,
    'sideBar.border': theme.ui.uiborder,
    'sideBar.foreground': `${theme.ui.defaultMain}CC`,
    'sideBarSectionHeader.background': theme.ui.uibackgroundalt,
    'sideBarSectionHeader.foreground': theme.ui.default,
    'sideBarSectionHeader.border': theme.ui.uiborder,
    'sideBarTitle.foreground': theme.ui.defaultalt,
    'tree.indentGuidesStroke': theme.ui.defaultalt + 70,

    // StatusBar
    'statusBar.background': theme.ui.uibackgroundalt,
    'statusBar.border': theme.ui.uiborder,
    'statusBar.debuggingBackground': `${theme.ui.primary}44`,
    'statusBar.debuggingForeground': theme.ui.default,
    'statusBar.foreground': `${theme.ui.defaultMain}BB`,
    'statusBar.noFolderBackground': theme.ui.uiborder,
    'statusBar.noFolderBorder': theme.ui.primary,
    'statusBar.noFolderForeground': theme.ui.default,
    'statusBarItem.activeBackground': theme.ui.primaryalt,
    'statusBarItem.hoverBackground': `${theme.ui.defaultalt}30`,
    'statusBarItem.prominentBackground': theme.ui.uiborder,
    'statusBarItem.prominentHoverBackground': theme.ui.primaryalt,
    'statusBarItem.errorBackground': theme.colors.red,

    // Suggest
    'editorSuggestWidget.background': theme.ui.uibackground,
    'editorSuggestWidget.border': theme.ui.uiborder,
    'editorSuggestWidget.foreground': theme.ui.defaultMain,
    'editorSuggestWidget.highlightForeground': theme.colors.yellow,
    'editorSuggestWidget.selectedBackground': `${theme.ui.primary}4d`,

    // Tabs
    'editorGroupHeader.noTabsBackground': theme.ui.uibackground,
    'editorGroupHeader.tabsBackground': theme.ui.uibackgroundalt,
    'editorGroupHeader.tabsBorder': theme.ui.uiborder,
    'editorGroupHeader.border': '#00000000',
    'tab.activeBackground': hc ? theme.ui.primary + 20 : theme.ui.uibackground,
    'tab.activeForeground': theme.ui.primary,
    'tab.activeBorderTop': theme.ui.primary,
    'tab.border': theme.ui.uiborder,
    'tab.hoverBorder': '#00000000',
    'tab.hoverBackground': `${theme.ui.uibackground}cc`,
    'tab.unfocusedHoverBackground': `${theme.ui.primary}10`,
    'tab.unfocusedHoverBorder': '#00000000',
    'tab.inactiveBackground': theme.ui.uibackgroundalt,
    'tab.inactiveForeground': theme.ui.defaultalt,
    'tab.unfocusedActiveForeground': theme.ui.default,
    'tab.unfocusedInactiveForeground': theme.ui.default,
    'tab.lastPinnedBorder': theme.ui.uiborder,

    // Terminal
    'terminal.ansiBlack': theme.ui.uibackground,
    'terminal.ansiRed': theme.levels.danger,
    'terminal.ansiGreen': theme.levels.success,
    'terminal.ansiYellow': theme.colors.yellow,
    'terminal.ansiBlue': theme.levels.info,
    'terminal.ansiMagenta': theme.colors.pink,
    'terminal.ansiCyan': theme.colors.turquoize,
    'terminal.ansiWhite': theme.ui.default,
    'terminal.ansiBrightBlack': theme.levels.info,
    'terminal.ansiBrightRed': theme.levels.danger,
    'terminal.ansiBrightGreen': theme.levels.success,
    'terminal.ansiBrightYellow': theme.colors.yellow,
    'terminal.ansiBrightBlue': theme.levels.info,
    'terminal.ansiBrightMagenta': theme.colors.pink,
    'terminal.ansiBrightCyan': theme.colors.turquoize,
    'terminal.ansiBrightWhite': theme.ui.default,
    'terminal.background': theme.ui.uibackground,
    'terminal.foreground': theme.ui.default,
    'terminalCursor.background': theme.colors.yellow,
    'terminalCursor.foreground': theme.colors.yellow,
    'terminal.selectionForeground': theme.ui.default,

    // Text
    'textBlockQuote.background': `${theme.levels.info}34`,
    'textBlockQuote.border': `${theme.levels.info}b9`,
    'textCodeBlock.background': `${theme.levels.info}34`,
    'textLink.activeForeground': theme.levels.info,
    'textLink.foreground': theme.levels.info,
    'textPreformat.foreground': theme.colors.yellow,
    'textSeparator.foreground': theme.ui.primary,
    'walkThrough.embeddedEditorBackground': theme.ui.uibackground,

    // TitleBar
    'titleBar.activeBackground': theme.ui.uibackgroundalt,
    'titleBar.activeForeground': theme.ui.defaultalt,
    'titleBar.inactiveBackground': theme.ui.uiborder,
    'titleBar.inactiveForeground': theme.ui.defaultalt,
    'titleBar.border': theme.ui.uiborder,
  };
}
