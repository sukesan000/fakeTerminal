package com.example.fakeTerminal.controller;

import com.example.fakeTerminal.service.AddLogService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class mainController {
    @Autowired
    AddLogService alservice;
    Gson gson = new Gson();

    @GetMapping("/fakeTerminal")
    public String main(Model model){
        String startMessage = "Lauch fakeTerminal? [y / n]";
        model.addAttribute("startMessage", startMessage);
        return "terminal";
    }

    @PostMapping("/formSubmit")
    @ResponseBody
    public String formSubmit(@RequestParam String inputText){
        return gson.toJson(inputText);
    }

    @PostMapping("/systemStart")
    @ResponseBody
    public String systemStart(@RequestParam String startText){
        //起動ログを書く
        Map<String, String> logList = alservice.fileDownload();
        return gson.toJson(logList);
    }
}
