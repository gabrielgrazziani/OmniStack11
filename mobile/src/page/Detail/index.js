import React from 'react';
import {View, Image,Text,TouchableOpacity,Linking} from 'react-native';
import {useNavigation,useRoute} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';


import styles from './styles';

import LogoImg from '../../assets/logo.png';

export default function Detail(){
    const navegation = useNavigation();
    const routes = useRoute();

    const incident = routes.params.incident;
    const message = `Ola ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(incident.value)}.`;

    function navegationBack(){
        navegation.goBack();
    };

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        })
    };

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    };
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={LogoImg}/>
                <TouchableOpacity onPress={navegationBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty,{marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Descrição:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat(
                        'pt-BR',
                        {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(incident.value)
                    }
                </Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity onPress={sendWhatsApp} style={styles.action}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity onPress={sendMail} style={styles.action}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    );
}