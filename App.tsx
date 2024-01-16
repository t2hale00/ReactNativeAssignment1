import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
            <Text style={[styles.nameText, styles.boldText]}>John Crawford</Text>
            <Text style={styles.emailText}>John123@gmail.com</Text>
          </View>
        </View>

        <View style={styles.separator}></View>
        <Text style={styles.transactionTimeText}>Transaction Time</Text>
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
    height: 500,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 20,
  },
  image1: {
    width: 100,
    height: 100,
  },
  successText: {
    marginTop: 10,
    fontSize: 16,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#356154',
    marginTop: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  image2: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nameEmailContainer: {
    marginLeft: 10,
  },
  nameText: {
    fontSize: 16,
  },
  emailText: {
    fontSize: 14,
    color: '#555',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  transactionTimeText: {
    fontSize: 14,
    color: '#555',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
