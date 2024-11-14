import {
  addNewContact,
  deleteContact,
  getAllContacts,
  getContactById,
  updateContact,
} from '../controllers/crmController';

const routes = (app) => {
  app
    .route('/contact')
    .get((req, res, next) => {
      // Middleware
      console.log(`Req From: ${req.originalUrl}`);
      console.log(`Req Type: ${req.method}`);
      next();
    }, getAllContacts)

    .post(addNewContact);
  app
    .route('/contact/:contactId')
    .get(getContactById)
    .put(updateContact)
    .delete(deleteContact);
};

export default routes;
