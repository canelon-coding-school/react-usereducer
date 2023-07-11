<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173'); // CORS
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (isset($data['username']) && isset($data['password'])) {
    if ($data['username'] === 'nicolas' && $data['password'] === 'nicolasm') {
        echo json_encode(['status' => 'success', 'token' => 'fake_token']);
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid username or password']);
    }
} else {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Username or password not provided']);
}
