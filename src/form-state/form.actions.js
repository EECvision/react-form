import formActionTypes from './form.types';

export const setAService = value =>({
  type: formActionTypes.SET_A_SERVICE,
  payload: value
});

export const setMode = value =>({
  type: formActionTypes.SET_MODE,
  payload: value
});

export const setFromLocation = value =>({
  type: formActionTypes.SET_FROM_LOCATION,
  payload: value
});

export const setSubmit = value => ({
  type: formActionTypes.SET_SUBMIT,
  payload: value
});

export const setToLocation = value =>({
  type: formActionTypes.SET_TO_LOCATION,
  payload: value
});

export const setReadyDate = value =>({
  type: formActionTypes.SET_READY_DATE,
  payload: value
});

export const setIncoterms = value =>({
  type: formActionTypes.SET_INCOTERMS,
  payload: value
});

export const setTotalCargo = value =>({
  type: formActionTypes.SET_TOTAL_CARGO,
  payload: value
});

export const setTotalVolume = value =>({
  type: formActionTypes.SET_TOTAL_VOLUME,
  payload: value
});

export const setTotalWeight = value =>({
  type: formActionTypes.SET_TOTAL_WEIGHT,
  payload: value
});

export const setWarning = value =>({
  type: formActionTypes.SET_WARNING,
  payload: value
});

export const setExportForwarding= value =>({
  type: formActionTypes.SET_EXPORT_FORWARDING,
  payload: value
});

export const setImportCustom = value =>({
  type: formActionTypes.SET_IMPORT_CUSTOM_CLEARANCE,
  payload: value
});

export const setCargoInsurance = value =>({
  type: formActionTypes.SET_CARGO_INSURANCE,
  payload: value
});

export const setTransportDelivery = value =>({
  type: formActionTypes.SET_TRANSPORT_DELIVERY,
  payload: value
});
