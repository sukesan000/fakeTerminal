package com.example.fakeTerminal.controller;

import com.google.gson.Gson;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class mainController {
    @GetMapping("/fakeTerminal")
    public String main(Model model){
        String startMessage = "Lauch fakeTerminal? [y / n]";
        model.addAttribute("startMessage", startMessage);
        return "terminal";
    }

    @PostMapping("/formSubmit")
    @ResponseBody
    public String formSubmit(@RequestParam String inputText){
        Gson gson = new Gson();
        System.out.println(inputText);
        return gson.toJson(inputText);
    }
}
