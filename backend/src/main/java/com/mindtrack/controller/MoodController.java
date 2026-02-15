package com.mindtrack.controller;

import com.mindtrack.entity.MoodLog;
import com.mindtrack.service.MoodService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/moods")
@RequiredArgsConstructor
@Tag(name = "Mood Tracking", description = "Endpoints for logging and retrieving mood entries")
@SecurityRequirement(name = "bearerAuth")
public class MoodController {

    private final MoodService moodService;

    @PostMapping
    @Operation(summary = "Log a new mood entry")
    public ResponseEntity<MoodLog> createMood(@RequestBody MoodLog moodLog) {
        return ResponseEntity.ok(moodService.createMood(moodLog));
    }

    @GetMapping
    @Operation(summary = "Get all mood entries for the authenticated user")
    public ResponseEntity<List<MoodLog>> getUserMoods() {
        return ResponseEntity.ok(moodService.getUserMoods());
    }
}