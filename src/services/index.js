import { post, get } from './api';

const services = {
  auth: {
    login: async (model) => {
      return await post({
        api: 'SMS/get_code',
        model,
      });
    },
    verify: async (model) => {
      return await post({
        api: 'Security/Token',
        model,
      });
    },
    register: async (model) => {
      return await post({
        api: 'User',
        model,
      });
    },
  },
  category: {
    apcategories_All: async () => {
      return await get({
        api: 'APcategories_All/Get_APcategories_All',
      });
    },
    triage: async () => {
      return await get({
        api: 'Triage/Get_Triage',
      });
    },
  },
  user: {
    address: async () => {
      return await get({
        api: 'Address',
      });
    },
    profile: async () => {
      return await get({
        api: 'User',
      });
    },
    addAddress: async (model) => {
      return await post({
        api: 'Address',
        model,
      });
    },
    patients: async () => {
      return await get({
        api: 'Patients',
      });
    },
    addPatients: async (model) => {
      return await post({
        api: 'Patients',
        model,
      });
    },
  },
  setting: {
    config: async () => {
      return await get({
        api: 'Config',
      });
    },
    agreement: async (model) => {
      return await post({
        api: 'Agreement/Post_Agreement',
        model,
      });
    },
  },
};

export default services;
