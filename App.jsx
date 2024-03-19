import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import email from 'react-native-email';
const Logo = require('./src/assets/playstore.png');

const App = () => {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (
      !name.trim() ||
      !jobTitle.trim() ||
      !companyName.trim() ||
      !message.trim() ||
      !phone.trim()
    ) {
      setError('Please fill in all fields');
      return;
    }

    const to = ['ginnieabdullah007@gmail.com'];
    email(to, {
      subject: 'Response from a potential candidate',
      body: `Name: ${name}\nJob Title: ${jobTitle}\nPhone Number:${phone}\nCompany Name: ${companyName} \nMessage: ${message}`,
      checkCanOpen: false,
    }).catch(console.error);

    setName('');
    setJobTitle('');
    setCompanyName('');
    setPhoneNumber('');
    setMessage('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={Logo} />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#ccc'}
          placeholder="Enter your Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Text style={styles.label}>Job Title</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#ccc'}
          placeholder="Enter your Job Title"
          value={jobTitle}
          onChangeText={text => setJobTitle(text)}
        />
        <Text style={styles.label}>Company Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#ccc'}
          placeholder="Enter your Company Name"
          value={companyName}
          onChangeText={text => setCompanyName(text)}
        />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#ccc'}
          placeholder="Enter your Phone Number"
          value={phone}
          keyboardType="numeric"
          onChangeText={text => setPhoneNumber(text)}
        />
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={styles.messageInput}
          placeholderTextColor={'#ccc'}
          placeholder="Enter your Message"
          value={message}
          onChangeText={text => setMessage(text)}
          multiline
          numberOfLines={4}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Response</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  form: {
    width: '80%',
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
    color: '#000',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    color: '#000',
  },
  messageInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    color: '#000',
    height: 100,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  avatarContainer: {
    marginTop: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default App;
