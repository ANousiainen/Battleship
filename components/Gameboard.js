import React, {useState, useEffect, useRef} from 'react'
import { Text, View, Pressable, Button } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import styles from '../style/style'

const START = 'plus'
const MISS = 'cross'
const HIT = 'circle'

const NBR_OF_SHIPS = 3;
const NBR_OF_BOMBS = 15;
const NBR_OF_HITS = 0;

let initialBoard = [
    START, START, START, START, START,
    START, START, START, START, START,
    START, START, START, START, START,
    START, START, START, START, START,
    START, START, START, START, START,
];

export default function Gameboard() {

    const [gameRunning, setGameRunning] =useState(true);
    const [board, setBoard] = useState(initialBoard);
    const [placeOfShips, setPlaceOfShips] = useState([]);
    const [ships, setShips] = useState(NBR_OF_SHIPS);
    const [nbrOfBombs, setNbrOfBombs] = useState(NBR_OF_BOMBS);
    const [hits, setHits] = useState(NBR_OF_HITS);
    const [status, setStatus] = useState('The game has not started');

    const [time, setTime] = useState();
    const timerRef = useRef();

    function gameOver(){
    //Kun jokin ehdoista täyttyy, peli loppuu   

            
            if(ships === 0 && hits === 3){
                setGameRunning(false);
                stop();
                setStatus('You sunk all the ships, VICTORY!');
            }
            else if(time === 0){
                setGameRunning(false);
                stop();
                setStatus('You ran out of time. GAME OVER');            
            } 
            else if (nbrOfBombs < 1){
                setGameRunning(false);
                stop();
                setStatus('You ran out of bombs, GAME OVER');  
            }
        }

    //Joka kerta kun drawItemia käytetään, gameOver tarkistetaan
    useEffect(()=> {
        if (drawItem()){
            gameOver();
        }
    });

    function drawItem(number){
    //Määrää HIT/MISS ja arvojen muuttumisen
    
        if (board[number] === START){

        let isShip = placeOfShips.includes(number);
        initialBoard[number] = isShip ? HIT : MISS ;
        
        if (isShip){
            setHits(hits+1)
            setShips(ships-1)
            setNbrOfBombs(nbrOfBombs-1) 
        }
        else {
            setNbrOfBombs(nbrOfBombs-1)           
            }
        }    
        gameOver();
    }
 

    function chooseItemColor(number) {
    //Määrää elementtien värit
        if (board[number] === MISS) {
            return "#FF3031";
        }
        else if (board[number] === HIT) {
            return "#45CE30";
        }
        else {
            return "#74B9FF";
        }
    }

    function resetGame(){
    // tyhjentää ruudukon ja palauttaa alkup. arvot

        initialBoard = [
            START, START, START, START, START,
            START, START, START, START, START,
            START, START, START, START, START,
            START, START, START, START, START,
            START, START, START, START, START,
        ];
        setBoard(initialBoard);
        setNbrOfBombs (NBR_OF_BOMBS);
        setShips (NBR_OF_SHIPS);
        setHits (NBR_OF_HITS);
        setTime (30);

        stop();
        placeShips();    
    }

    function placeShips() {       
    // arvo 0-24 väliltä, kolme kertaa, välttäen samoja lukuja

        var placeOfShips = []

        while(placeOfShips.length < 3){
            var r = Math.floor(Math.random() * 24) + 1;
            if(placeOfShips.indexOf(r) === -1) placeOfShips.push(r);
        }
        setPlaceOfShips(placeOfShips);
        console.log(placeOfShips);

        setGameRunning(true);
        timer();
        setStatus('The game is on...');
    }

    // Ajastin:
    function timer() {
        const second = 
        setInterval(() => {
            setTime((time) => time-1)
            }, 1000);
        timerRef.current = second;
        }
        function stop() {
            clearInterval(timerRef.current);
        }
        if (time === 0){
            stop();
        }

  // 5x5 ruudukko ja nappi+info:
    return (
    <View style={styles.gameboard}>

        <View style={styles.flex}>
            <Pressable key ={0} style={styles.row} onPress={() => drawItem(0)}>
                <Entypo key={0} name={board[0]} size={32} color={chooseItemColor(0)} />
            </Pressable>
            <Pressable key ={1} style={styles.row} onPress={() => drawItem(1)}>
                <Entypo key={1} name={board[1]} size={32} color={chooseItemColor(1)} />
            </Pressable>
            <Pressable key ={2} style={styles.row} onPress={() => drawItem(2)}>
                <Entypo key={2} name={board[2]} size={32} color={chooseItemColor(2)} />
            </Pressable>
            <Pressable key ={3} style={styles.row} onPress={() => drawItem(3)}>
                <Entypo key={3} name={board[3]} size={32} color={chooseItemColor(3)} />
            </Pressable>
            <Pressable key ={4} style={styles.row} onPress={() => drawItem(4)}>
                <Entypo key={4} name={board[4]} size={32} color={chooseItemColor(4)} />
            </Pressable>
        </View>

        <View style={styles.flex}>
            <Pressable key ={5} style={styles.row} onPress={() => drawItem(5)}>
                <Entypo key={5} name={board[5]} size={32} color={chooseItemColor(5)} />
            </Pressable>
            <Pressable key ={6} style={styles.row} onPress={() => drawItem(6)}>
                <Entypo key={6} name={board[6]} size={32} color={chooseItemColor(6)} />
            </Pressable>
            <Pressable key ={7} style={styles.row} onPress={() => drawItem(7)}>
                <Entypo key={7} name={board[7]} size={32} color={chooseItemColor(7)} />
            </Pressable>
            <Pressable key ={8} style={styles.row} onPress={() => drawItem(8)}>
                <Entypo key={8} name={board[8]} size={32} color={chooseItemColor(8)} />
            </Pressable>
            <Pressable key ={9} style={styles.row} onPress={() => drawItem(9)}>
                <Entypo key={9} name={board[9]} size={32} color={chooseItemColor(9)} />
            </Pressable>
        </View>

        <View style={styles.flex}>
            <Pressable key ={10} style={styles.row} onPress={() => drawItem(10)}>
                <Entypo key={10} name={board[10]} size={32} color={chooseItemColor(10)} />
            </Pressable>
            <Pressable key ={11} style={styles.row} onPress={() => drawItem(11)}>
                <Entypo key={11} name={board[11]} size={32} color={chooseItemColor(11)} />
            </Pressable>
            <Pressable key ={12} style={styles.row} onPress={() => drawItem(12)}>
                <Entypo key={12} name={board[12]} size={32} color={chooseItemColor(12)} />
            </Pressable>
            <Pressable key ={13} style={styles.row} onPress={() => drawItem(13)}>
                <Entypo key={13} name={board[13]} size={32} color={chooseItemColor(13)} />
            </Pressable>
            <Pressable key ={14} style={styles.row} onPress={() => drawItem(14)}>
                <Entypo key={14} name={board[14]} size={32} color={chooseItemColor(14)} />
            </Pressable>
        </View>

        <View style={styles.flex}>
            <Pressable key ={15} style={styles.row} onPress={() => drawItem(15)}>
                <Entypo key={15} name={board[15]} size={32} color={chooseItemColor(15)} />
            </Pressable>
            <Pressable key ={16} style={styles.row} onPress={() => drawItem(16)}>
                <Entypo key={16} name={board[16]} size={32} color={chooseItemColor(16)} />
            </Pressable>
            <Pressable key ={17} style={styles.row} onPress={() => drawItem(17)}>
                <Entypo key={17} name={board[17]} size={32} color={chooseItemColor(17)} />
            </Pressable>
            <Pressable key ={18} style={styles.row} onPress={() => drawItem(18)}>
                <Entypo key={18} name={board[18]} size={32} color={chooseItemColor(18)} />
            </Pressable>
            <Pressable key ={19} style={styles.row} onPress={() => drawItem(19)}>
                <Entypo key={19} name={board[19]} size={32} color={chooseItemColor(19)} />
            </Pressable>
        </View>

        <View style={styles.flex}>
            <Pressable key ={20} style={styles.row} onPress={() => drawItem(20)}>
                <Entypo key={20} name={board[20]} size={32} color={chooseItemColor(20)} />
            </Pressable>
            <Pressable key ={21} style={styles.row} onPress={() => drawItem(21)}>
                <Entypo key={21} name={board[21]} size={32} color={chooseItemColor(21)} />
            </Pressable>
            <Pressable key ={22} style={styles.row} onPress={() => drawItem(22)}>
                <Entypo key={22} name={board[22]} size={32} color={chooseItemColor(22)} />
            </Pressable>
            <Pressable key ={23} style={styles.row} onPress={() => drawItem(23)}>
                <Entypo key={23} name={board[23]} size={32} color={chooseItemColor(23)} />
            </Pressable>
            <Pressable key ={24} style={styles.row} onPress={() => drawItem(24)}>
                <Entypo key={24} name={board[24]} size={32} color={chooseItemColor(24)} />
            </Pressable>
        </View>

        <Button 
            style={styles.button} 
            title= "Start the game!"
            onPress={() => resetGame()}          
        />

        <View style={styles.row}>
            <Text style={styles.gameinfo}> Hits: {hits} </Text>
            <Text style={styles.gameinfo}> Bombs left: {nbrOfBombs} </Text>
            <Text style={styles.gameinfo}> Ships left: {ships} </Text>
            <Text style={styles.gameinfo}> Time left: {time} </Text>
            <Text style={styles.gameinfo}> Status: {status} </Text>
        </View>
    </View>
    )
}



