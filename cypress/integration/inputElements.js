const inputElements = {
  textfieldTitle: '[data-drupal-selector="edit-title-0-value"]',
  inputServiceAdd:
    '[data-drupal-selector="field-department-services-department-service-section-add-more"]',
  serviceSectionTitle:
    '[name="field_department_services[0][subform][field_dept_service_section_title][0][value]"]',
  inputServiceAddItem:
    '[data-drupal-selector="edit-field-department-services-0-subform-field-dept-service-sect-services-add-more"]',
  inputAliasCheckbox: '[name="path[0][pathauto]"]',
  textfieldAlias: '[name="path[0][alias]"]',
  selectPublish: '[data-drupal-selector="edit-moderation-state-0-state"]',
  buttonSubmit: '[data-drupal-selector="edit-submit"]',
  aTranslateTab: '.sfgov-tabbed-navigation [href$="translations"]',
  redirect: {
    origin: '[name="redirect_source[0][path]"]',
    destination: '[name="redirect_redirect[0][uri]"]',
    save: '[name="op"]',
  },
};

export default inputElements;
