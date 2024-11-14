import mongoose from 'mongoose';
import ContactSchema from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
  try {
    let newContact = new Contact(req.body);
    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contactsQuery = await Contact.find();
    res.json(contactsQuery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getContactById = async (req, res) => {
  try {
    const user = await Contact.findById(req.params.contactId);
    if (!user) return null;

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateContact = async (req, res) => {
  try {
    const updatedUser = await Contact.findOneAndUpdate(
      { _id: req.params.contactId },
      req.body,
      { new: true }
    );
    if (!updatedUser)
      throw new Error('Something went wrong while updating user');
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const deletedUser = await Contact.findByIdAndDelete({
      _id: req.params.contactId,
    });
    if (!deletedUser) {
      throw new Error('Something went wrong while deleting the contact');
    }
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
