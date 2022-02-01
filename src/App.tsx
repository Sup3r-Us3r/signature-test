import React, {useRef} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Signature, {SignatureViewRef} from 'react-native-signature-canvas';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    padding: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
});

export const SignatureScreen = () => {
  const signatureRef = useRef<SignatureViewRef>(null);

  function handleConfirm() {
    console.log('Confirmado');
    signatureRef.current?.readSignature();
  }

  function handleOK(signature: string) {
    console.log('signature: ', signature);
  }

  function handleEmpty() {
    signatureRef.current?.clearSignature();
  }

  function handleData() {
    signatureRef.current?.getData();
  }

  const webStyles = `.m-signature-pad { box-shadow: none; border: none; background: #EEEEEE; }
    .m-signature-pad--body { border: none; }
    .m-signature-pad--footer { display: none; margin: 0px; }
    body, html { height: 100%; width: 100%; }
  `;

  return (
    <View style={{flex: 1}}>
      <Signature
        ref={signatureRef}
        // descriptionText="Ações"
        // clearText="Limpar"
        // confirmText="Salvar"
        webStyle={webStyles}
        onOK={handleOK}
        onEmpty={handleEmpty}
        onGetData={handleData}
        penColor="#000"
      />

      <View style={styles.row}>
        <Button title="Limpar" onPress={handleEmpty} />
        <Button title="Confirmar" onPress={handleConfirm} />
      </View>
    </View>
  );
};
