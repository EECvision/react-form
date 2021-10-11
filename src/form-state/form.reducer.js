import formActionTypes from './form.types';

export const INITIAL_STATE = {
  service: 'air',
  mode: 'import',
  from: '',
  to: '',
  readyDate: '',
  incoterms: '',
  totalCargo: '',
  totalVolume: '',
  totalWeight: '',
  warning: false,
  exportForwarding: false,
  importCustomClearance: false,
  cargoInsurance: false,
  transportDelivery: false,
  submit: false
}

export const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case formActionTypes.SET_A_SERVICE:
      return {
        ...state,
        service: action.payload
      }
    case formActionTypes.SET_MODE:
      return {
        ...state,
        mode: action.payload
      }
    case formActionTypes.SET_FROM_LOCATION:
      return {
        ...state,
        from: action.payload
      }
    case formActionTypes.SET_TO_LOCATION:
      return {
        ...state,
        to: action.payload
      }
    case formActionTypes.SET_READY_DATE:
      return {
        ...state,
        readyDate: action.payload
      }
    case formActionTypes.SET_INCOTERMS:
      return {
        ...state,
        incoterms: action.payload
      }
    case formActionTypes.SET_TOTAL_CARGO:
      return {
        ...state,
        totalCargo: action.payload
      }
    case formActionTypes.SET_TOTAL_VOLUME:
      return {
        ...state,
        totalVolume: action.payload
      }
    case formActionTypes.SET_TOTAL_WEIGHT:
      return {
        ...state,
        totalWeight: action.payload
      }
    case formActionTypes.SET_WARNING:
      return {
        ...state,
        warning: action.payload
      }
    case formActionTypes.SET_EXPORT_FORWARDING:
      return {
        ...state,
        exportForwarding: action.payload
      }
    case formActionTypes.SET_IMPORT_CUSTOM_CLEARANCE:
      return {
        ...state,
        importCustomClearance: action.payload
      }
    case formActionTypes.SET_CARGO_INSURANCE:
      return {
        ...state,
        cargoInsurance: action.payload
      }
    case formActionTypes.SET_TRANSPORT_DELIVERY:
      return {
        ...state,
        transportDelivery: action.payload
      }
    case formActionTypes.SET_SUBMIT:
      return {
        ...state,
        submit: action.payload
      }
    default:
      return state;
  }
}