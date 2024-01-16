import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.image1}
          source={require('./images/roundimage.png')}
        />
        <Text style={styles.successText}>Sent successfully to <Text style={styles.boldText}>Lela Crawford</Text></Text>
        <Text style={styles.amountText}>$100.00</Text>

        <View style={styles.profileContainer}>
          <Image
            style={styles.image2}
            source={require('./images/faceimage.jpeg')}
          />
          <View style={styles.nameEmailContainer}>
            <Text style={[styles.nameText, styles.boldText]}>Mary Crawford</Text>
            <Text style={styles.emailText}>Mary123@gmail.com</Text>
          </View>
        </View>

        <View style={styles.separator}></View>
        <Text style={styles.transactionTimeText}>Transaction done on 12 January 2018</Text>
        <Text style={styles.transactionTimeText}>Your reference number is 03492390</Text>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => {
            // Add your continue button functionality here
          }}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#356154',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 330,
    height: 600,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 20,
  },
  image1: {
    width: 100,
    height: 100,
    marginTop: 60,
  },
  successText: {
    marginTop: 10,
    fontSize: 16,
  },
  amountText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#356154',
    marginTop: 20,
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  image2: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  nameEmailContainer: {
    marginLeft: 20,
  },
  nameText: {
    fontSize: 20,
  },
  emailText: {
    fontSize: 12,
    color: '#555',
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#ccc',
    marginVertical: 10,
    marginBottom: 30,
  },
  transactionTimeText: {
    fontSize: 14,
    color: '#555',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
 
  continueButton: {
    backgroundColor:  '#356154',
    padding: 15,
    borderRadius: 30,
    marginTop: 60,
    width: '90%',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
