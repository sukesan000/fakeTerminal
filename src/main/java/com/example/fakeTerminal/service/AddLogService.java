package com.example.fakeTerminal.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AddLogService {
    public Map<String, String> fileDownload(){
        Map<String, String> logList = new HashMap<>();
        //List<String> logList = new ArrayList<>();
        logList.put("startDownload","Downloding piyo.java");
        logList.put("progress", "[]");
        logList.put("endDownload", "Successfully installed piyo.java");
        return logList;
    }
}
